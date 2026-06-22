import "server-only";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommand,
  PutCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import type { Performance } from "./performance";
import { AWS_REGION, awsCredentials } from "./aws";

const TABLE = process.env.PERF_TABLE!;

const ddb = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: AWS_REGION, credentials: awsCredentials }),
);

export async function getAllPerformance(): Promise<Performance[]> {
  const items: Performance[] = [];
  let ExclusiveStartKey: Record<string, unknown> | undefined;
  do {
    const res = await ddb.send(
      new ScanCommand({ TableName: TABLE, ExclusiveStartKey }),
    );
    items.push(...((res.Items as Performance[]) ?? []));
    ExclusiveStartKey = res.LastEvaluatedKey as Record<string, unknown> | undefined;
  } while (ExclusiveStartKey);
  return items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getPerformance(id: string): Promise<Performance | null> {
  const res = await ddb.send(new GetCommand({ TableName: TABLE, Key: { id } }));
  return (res.Item as Performance) ?? null;
}

export async function putPerformance(item: Performance): Promise<void> {
  await ddb.send(new PutCommand({ TableName: TABLE, Item: item }));
}

export async function deletePerformance(id: string): Promise<void> {
  await ddb.send(new DeleteCommand({ TableName: TABLE, Key: { id } }));
}
