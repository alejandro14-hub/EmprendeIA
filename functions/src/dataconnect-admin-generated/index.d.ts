import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

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

/** Generated Node Admin SDK operation action function for the 'CreateAiResource' Mutation. Allow users to execute without passing in DataConnect. */
export function createAiResource(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAiResourceData>>;
/** Generated Node Admin SDK operation action function for the 'CreateAiResource' Mutation. Allow users to pass in custom DataConnect instances. */
export function createAiResource(options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAiResourceData>>;

/** Generated Node Admin SDK operation action function for the 'ListPublicAiResources' Query. Allow users to execute without passing in DataConnect. */
export function listPublicAiResources(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListPublicAiResourcesData>>;
/** Generated Node Admin SDK operation action function for the 'ListPublicAiResources' Query. Allow users to pass in custom DataConnect instances. */
export function listPublicAiResources(options?: OperationOptions): Promise<ExecuteOperationResponse<ListPublicAiResourcesData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateProject' Mutation. Allow users to execute without passing in DataConnect. */
export function updateProject(dc: DataConnect, vars: UpdateProjectVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateProjectData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateProject' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateProject(vars: UpdateProjectVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateProjectData>>;

/** Generated Node Admin SDK operation action function for the 'ListMyReviews' Query. Allow users to execute without passing in DataConnect. */
export function listMyReviews(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListMyReviewsData>>;
/** Generated Node Admin SDK operation action function for the 'ListMyReviews' Query. Allow users to pass in custom DataConnect instances. */
export function listMyReviews(options?: OperationOptions): Promise<ExecuteOperationResponse<ListMyReviewsData>>;

