let apiUrl = location.origin + '/graphql';
let bearerToken = undefined;

export default{

	setBearerToken(token){
		bearerToken = token;
	},

	setApiUrl(url){
		apiUrl = url;
	},

	async addReactionsToPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation addReactionsToPost($owner: PostInput, $input: [Reaction]) { addReactionsToPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "addReactionsToPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async removeReactionsFromPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation removeReactionsFromPost($owner: PostInput, $input: [Reaction]) { removeReactionsFromPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "removeReactionsFromPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async reactionsOfPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query reactionsOfPost($owner: PostInput, $input: PageRequestInput) { reactionsOfPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "reactionsOfPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async freeTextSearchReactionsOfPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query freeTextSearchReactionsOfPost($owner: PostInput, $input: FreeTextSearchPageRequestInput) { freeTextSearchReactionsOfPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "freeTextSearchReactionsOfPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async addTagCountToPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation addTagCountToPost($owner: PostInput, $input: [Int]) { addTagCountToPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "addTagCountToPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async removeTagCountFromPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation removeTagCountFromPost($owner: PostInput, $input: [Integer>]) { removeTagCountFromPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "removeTagCountFromPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async tagCountOfPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query tagCountOfPost($owner: PostInput, $input: PageRequestInput) { tagCountOfPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "tagCountOfPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async freeTextSearchTagCountOfPost(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query freeTextSearchTagCountOfPost($owner: PostInput, $input: FreeTextSearchPageRequestInput) { freeTextSearchTagCountOfPost(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "freeTextSearchTagCountOfPost"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async users(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query users($input: PageRequestInput) { users(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "users"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async countTotalUsers(customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query countTotalUsers { countTotalUsers }`, 
					operationName: "countTotalUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async countTotalArchivedUsers(customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query countTotalArchivedUsers { countTotalArchivedUsers }`, 
					operationName: "countTotalArchivedUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async getUserById(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query getUserById($input: Int!) { getUserById(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "getUserById"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async getUsersById(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query getUsersById($input: [Int]) { getUsersById(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "getUsersById"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async createUser(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation createUser($input: UserInput) { createUser(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "createUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async createUsers(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation createUsers($input: [UserInput]) { createUsers(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "createUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async updateUser(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation updateUser($input: UserInput) { updateUser(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "updateUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async updateUsers(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation updateUsers($input: [UserInput]) { updateUsers(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "updateUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async deleteUser(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation deleteUser($input: UserInput) { deleteUser(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "deleteUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async deleteUsers(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation deleteUsers($input: [UserInput]) { deleteUsers(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "deleteUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async archiveUser(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation archiveUser($input: UserInput) { archiveUser(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "archiveUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async archiveUsers(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation archiveUsers($input: [UserInput]) { archiveUsers(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "archiveUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async deArchiveUser(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation deArchiveUser($input: UserInput) { deArchiveUser(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "deArchiveUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async deArchiveUsers(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation deArchiveUsers($input: [UserInput]) { deArchiveUsers(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "deArchiveUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async archivedUsers(input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query archivedUsers($input: PageRequestInput) { archivedUsers(input: $input)${expectedReturn} }`, 
					variables: {
						"input": input
					}, 
					operationName: "archivedUsers"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async associatePostsWithUser(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation associatePostsWithUser($owner: UserInput, $input: [PostInput]) { associatePostsWithUser(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "associatePostsWithUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async updatePostsOfUser(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation updatePostsOfUser($owner: UserInput, $input: [PostInput]) { updatePostsOfUser(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "updatePostsOfUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async removePostsFromUser(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `mutation removePostsFromUser($owner: UserInput, $input: [PostInput]) { removePostsFromUser(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "removePostsFromUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async postsOfUser(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query postsOfUser($owner: UserInput, $input: PageRequestInput) { postsOfUser(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "postsOfUser"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

	async postsOfUserFreeTextSearch(owner, input, expectedReturn, customHeaders){
			let requestHeaders = { "Content-Type": "application/json" }
			if(customHeaders !== undefined) requestHeaders = Object.assign({}, requestHeaders, customHeaders);
			if(bearerToken !== undefined) requestHeaders["Authorization"] = bearerToken;
			let opts = {
				method: "POST",
				credentials: "include",
				headers: requestHeaders,
				body: JSON.stringify({
					query: `query postsOfUserFreeTextSearch($owner: UserInput, $input: FreeTextSearchPageRequestInput) { postsOfUserFreeTextSearch(owner: $owner, input: $input)${expectedReturn} }`, 
					variables: {
						"owner": owner, 
						"input": input
					}, 
					operationName: "postsOfUserFreeTextSearch"
				})
			};
			return await (await fetch(apiUrl, opts)).json();
	},

}