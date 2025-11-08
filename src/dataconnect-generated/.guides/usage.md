# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createAiResource, listPublicAiResources, updateProject, listMyReviews } from '@dataconnect/generated';


// Operation CreateAIResource: 
const { data } = await CreateAiResource(dataConnect);

// Operation ListPublicAIResources: 
const { data } = await ListPublicAiResources(dataConnect);

// Operation UpdateProject:  For variables, look at type UpdateProjectVars in ../index.d.ts
const { data } = await UpdateProject(dataConnect, updateProjectVars);

// Operation ListMyReviews: 
const { data } = await ListMyReviews(dataConnect);


```