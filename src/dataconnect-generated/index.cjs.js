const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'salda',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createAiResourceRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAIResource');
}
createAiResourceRef.operationName = 'CreateAIResource';
exports.createAiResourceRef = createAiResourceRef;

exports.createAiResource = function createAiResource(dc) {
  return executeMutation(createAiResourceRef(dc));
};

const listPublicAiResourcesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicAIResources');
}
listPublicAiResourcesRef.operationName = 'ListPublicAIResources';
exports.listPublicAiResourcesRef = listPublicAiResourcesRef;

exports.listPublicAiResources = function listPublicAiResources(dc) {
  return executeQuery(listPublicAiResourcesRef(dc));
};

const updateProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProject', inputVars);
}
updateProjectRef.operationName = 'UpdateProject';
exports.updateProjectRef = updateProjectRef;

exports.updateProject = function updateProject(dcOrVars, vars) {
  return executeMutation(updateProjectRef(dcOrVars, vars));
};

const listMyReviewsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyReviews');
}
listMyReviewsRef.operationName = 'ListMyReviews';
exports.listMyReviewsRef = listMyReviewsRef;

exports.listMyReviews = function listMyReviews(dc) {
  return executeQuery(listMyReviewsRef(dc));
};
