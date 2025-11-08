import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'salda',
  location: 'us-central1'
};

export const createAiResourceRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAIResource');
}
createAiResourceRef.operationName = 'CreateAIResource';

export function createAiResource(dc) {
  return executeMutation(createAiResourceRef(dc));
}

export const listPublicAiResourcesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicAIResources');
}
listPublicAiResourcesRef.operationName = 'ListPublicAIResources';

export function listPublicAiResources(dc) {
  return executeQuery(listPublicAiResourcesRef(dc));
}

export const updateProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProject', inputVars);
}
updateProjectRef.operationName = 'UpdateProject';

export function updateProject(dcOrVars, vars) {
  return executeMutation(updateProjectRef(dcOrVars, vars));
}

export const listMyReviewsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyReviews');
}
listMyReviewsRef.operationName = 'ListMyReviews';

export function listMyReviews(dc) {
  return executeQuery(listMyReviewsRef(dc));
}

