import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AIExpert_Key {
  id: UUIDString;
  __typename?: 'AIExpert_Key';
}

export interface AIResource_Key {
  id: UUIDString;
  __typename?: 'AIResource_Key';
}

export interface CreateAiResourceData {
  aIResource_insert: AIResource_Key;
}

export interface ListMyReviewsData {
  reviews: ({
    id: UUIDString;
    rating: number;
    comment?: string | null;
    isPublic?: boolean | null;
    aiResource?: {
      id: UUIDString;
      name: string;
    } & AIResource_Key;
  } & Review_Key)[];
}

export interface ListPublicAiResourcesData {
  aIResources: ({
    id: UUIDString;
    name: string;
    category: string;
    description?: string | null;
    link?: string | null;
    pricingModel?: string | null;
    tags?: string[] | null;
  } & AIResource_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateProjectData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectVariables {
  id: UUIDString;
  status?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateAiResourceRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateAiResourceData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateAiResourceData, undefined>;
  operationName: string;
}
export const createAiResourceRef: CreateAiResourceRef;

export function createAiResource(): MutationPromise<CreateAiResourceData, undefined>;
export function createAiResource(dc: DataConnect): MutationPromise<CreateAiResourceData, undefined>;

interface ListPublicAiResourcesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicAiResourcesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicAiResourcesData, undefined>;
  operationName: string;
}
export const listPublicAiResourcesRef: ListPublicAiResourcesRef;

export function listPublicAiResources(): QueryPromise<ListPublicAiResourcesData, undefined>;
export function listPublicAiResources(dc: DataConnect): QueryPromise<ListPublicAiResourcesData, undefined>;

interface UpdateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectVariables): MutationRef<UpdateProjectData, UpdateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectVariables): MutationRef<UpdateProjectData, UpdateProjectVariables>;
  operationName: string;
}
export const updateProjectRef: UpdateProjectRef;

export function updateProject(vars: UpdateProjectVariables): MutationPromise<UpdateProjectData, UpdateProjectVariables>;
export function updateProject(dc: DataConnect, vars: UpdateProjectVariables): MutationPromise<UpdateProjectData, UpdateProjectVariables>;

interface ListMyReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyReviewsData, undefined>;
  operationName: string;
}
export const listMyReviewsRef: ListMyReviewsRef;

export function listMyReviews(): QueryPromise<ListMyReviewsData, undefined>;
export function listMyReviews(dc: DataConnect): QueryPromise<ListMyReviewsData, undefined>;

