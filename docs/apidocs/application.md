<br>

<a name="application-api"></a>

## Application API

| Endpoint | Method | Description |
|-----|-----|-----|
| [application:createApplication](#create-application) | websocket | Create application |
| [application:updateApplication](#update-application) | websocket | Update application |
| [application:deleteApplication](#delete-application) | websocket | Delete application |
| [application:getApplication](#get-application) | websocket | Get application |
| [application:createVersion](#create-application-version) | websocket | Create application version |
| [application:updateVersion](#update-application-version) | websocket | Update application version |
| [application:getVersion](#get-application-version) | websocket | Get application version |
| [application:listVersions](#list-application-versions) | websocket | List application versions |
| [application:submitVersionForReview](#submit-application-version-for-review) | websocket | Submit application version for review |
| [application:cancelVersionReview](#cancel-application-version-review) | websocket | Cancel application version review |
| [application:reviewVersion](#review-application-version) | websocket | Review application version |
| [application:publishVersion](#publish-application-version) | websocket | Publish application version |
| [application:updatePublishedNetworks](#update-application-published-networks) | websocket | Update application published networks |
| [application:setDefaultApplication](#set-default-application) | websocket | Set default application |
| [application:removeDefaultApplication](#remove-default-application) | websocket | Remove default application |
| [application:getDefaultApplication](#get-default-application) | websocket | Get default application |
| [application:listVersionReviews](#list-application-version-reviews) | websocket | List application version reviews |
| [application:assignRole](#assign-application-role) | websocket | Assign application role |
| [application:removeRole](#remove-application-role) | websocket | Remove application role |
| [application:listRoles](#list-application-roles) | websocket | List application roles |
| [application:transferOwnership](#transfer-application-ownership) | websocket | Transfer application ownership |
| [application:addExternalTester](#add-external-tester) | websocket | Add external tester |
| [application:removeExternalTester](#remove-external-tester) | websocket | Remove external tester |
| [application:listExternalTesters](#list-external-testers) | websocket | List external testers |
| [application:searchPublishedApplications](#search-published-applications) | websocket | Search published applications |
| [application:searchMyApplications](#search-my-applications) | websocket | Search my applications |
| [application:searchMyTesterAssignments](#search-my-tester-assignments) | websocket | Search my tester assignments |
| [application:searchReviewQueue](#search-application-review-queue) | websocket | Search application review queue |
| [appManifest:getIdentityToken](#get-identity-token) | websocket | Get identity token |
| [application:createClientCredentials](#create-application-client-credentials) | websocket | Create application client credentials |
| [application:regenerateClientCredentials](#regenerate-application-client-credentials) | websocket | Regenerate application client credentials |
| [application:deleteClientCredentials](#delete-application-client-credentials) | websocket | Delete application client credentials |
| [application:getClientCredentials](#get-application-client-credentials) | websocket | Get application client credentials |
| [application:revealClientCredentialsSecret](#reveal-application-client-credentials-secret) | websocket | Reveal application client credentials secret |
| [application:createOidcClient](#create-application-oidc-client) | websocket | Create application oidc client |
| [application:regenerateOidcClientSecret](#regenerate-application-oidc-client-secret) | websocket | Regenerate application oidc client secret |
| [application:deleteOidcClient](#delete-application-oidc-client) | websocket | Delete application oidc client |
| [application:updateOidcClientRedirectUris](#update-application-oidc-client-redirect-uris) | websocket | Update application oidc client redirect uris |
| [application:getOidcClient](#get-application-oidc-client) | websocket | Get application oidc client |

<br>

<a name="create-application"></a>

### Create application

**Method:** websocket

**Endpoint:** application:createApplication

**Request:** 

<pre>
{
    "data": {
        "name": string
        "description": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash; defaults to v1.0.0 if empty</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "name": string
        "description": string
        "version": string <span color="#1b1ef7"> // label of the most recently created version, e.g. v1.1.1 or v1.1.1#hash</span>
        "oidcClientId": string <span color="#1b1ef7"> // id of the separate AuthClient used for OIDC login; empty if not yet configured</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-application"></a>

### Update application

**Method:** websocket

**Endpoint:** application:updateApplication

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "name": string
        "description": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "name": string
        "description": string
        "version": string <span color="#1b1ef7"> // label of the most recently created version, e.g. v1.1.1 or v1.1.1#hash</span>
        "oidcClientId": string <span color="#1b1ef7"> // id of the separate AuthClient used for OIDC login; empty if not yet configured</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-application"></a>

### Delete application

**Method:** websocket

**Endpoint:** application:deleteApplication

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-application"></a>

### Get application

**Method:** websocket

**Endpoint:** application:getApplication

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "id": string
        "created": timestamp
        "updated": timestamp
        "name": string
        "description": string
        "version": string <span color="#1b1ef7"> // label of the most recently created version, e.g. v1.1.1 or v1.1.1#hash</span>
        "oidcClientId": string <span color="#1b1ef7"> // id of the separate AuthClient used for OIDC login; empty if not yet configured</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-application-version"></a>

### Create application version

**Method:** websocket

**Endpoint:** application:createVersion

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash; auto-filled by bumping the patch of the latest version if empty</span>
        "customParams": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
        "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
        "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
        "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
        "created": timestamp
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-application-version"></a>

### Update application version

**Method:** websocket

**Endpoint:** application:updateVersion

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "customParams": map[string]{ custom structure }
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
        "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
        "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
        "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
        "created": timestamp
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-application-version"></a>

### Get application version

**Method:** websocket

**Endpoint:** application:getVersion

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
        "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
        "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
        "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
        "created": timestamp
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-application-versions"></a>

### List application versions

**Method:** websocket

**Endpoint:** application:listVersions

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "versions": [{
            "applicationId": string
            "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
            "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
            "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
            "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
            "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
            "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
            "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
            "created": timestamp
            "updated": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="submit-application-version-for-review"></a>

### Submit application version for review

**Method:** websocket

**Endpoint:** application:submitVersionForReview

**Description:** Fails if another version of this Application is already inReview or approved - only one version may be in the review pipeline at a time.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "networks": [ string ] <span color="#1b1ef7"> // ['all'] or specific network ids; defaults to previously published networks, or the caller's current network</span>
        "excludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "comment": string <span color="#1b1ef7"> // developer's note to the reviewer, e.g. what changed or what to focus review on</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
        "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
        "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
        "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
        "created": timestamp
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="cancel-application-version-review"></a>

### Cancel application version review

**Method:** websocket

**Endpoint:** application:cancelVersionReview

**Description:** Withdraws a submission, moving an inReview or approved (not yet published) version back to draft. Discards every review decision recorded for this version and removes its review queue entry.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
        "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
        "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
        "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
        "created": timestamp
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="review-application-version"></a>

### Review application version

**Method:** websocket

**Endpoint:** application:reviewVersion

**Description:** Records an approve/reject decision, or an advisory comment/annotation with no decision at all (e.g. from an automated reviewer), for an application version. Requires the global release permission (system developers / AI reviewer's service account) - or, for a version not requesting every network, a network administrator whose managed networks overlap the requested ones (their approval is narrowed to just those networks). An approval moves the version to Approved, awaiting a separate, explicit publishVersion call.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "decision": string <span color="#1b1ef7"> // approved/rejected, or empty for an advisory comment/annotation with no decision (e.g. from an automated reviewer)</span>
        "comment": string <span color="#1b1ef7"> // optional comment from the reviewer</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // only used on approval; defaults to the requested networks</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="publish-application-version"></a>

### Publish application version

**Method:** websocket

**Endpoint:** application:publishVersion

**Description:** Makes an Approved version live, superseding whatever version was previously published. Either the app's own owner/admin or a system developer can publish.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string <span color="#1b1ef7"> // developer-supplied, e.g. v1.1.1 or v1.1.1#hash</span>
        "status": string <span color="#1b1ef7"> // draft/inReview/approved/released/rejected</span>
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data: icons, client/interface settings, permissions, etc</span>
        "requestedNetworks": [ string ] <span color="#1b1ef7"> // developer's requested networks on submit; ['all'] or specific network ids</span>
        "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "approvedNetworks": [ string ] <span color="#1b1ef7"> // reviewer's approved networks, set on approval; may differ from requested</span>
        "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "submitComment": string <span color="#1b1ef7"> // developer's note to the reviewer, set on submit</span>
        "created": timestamp
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-application-published-networks"></a>

### Update application published networks

**Method:** websocket

**Endpoint:** application:updatePublishedNetworks

**Description:** Lets a system developer adjust which networks a Released application is visible in, independent of any new review. Requires the global release permission.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "networks": [ string ] <span color="#1b1ef7"> // ['all'] or a list of specific network ids</span>
        "excludedNetworks": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "name": string
        "description": string
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data from the released version: icons, client/interface settings, permissions, etc</span>
        "networks": [ string ] <span color="#1b1ef7"> // ['all'] or specific network ids the app is published in</span>
        "excludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "publishedAt": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="set-default-application"></a>

### Set default application

**Method:** websocket

**Endpoint:** application:setDefaultApplication

**Description:** Sets networkId's single default application, replacing whatever was set before. Requires the global release permission (system developers).

**Request:** 

<pre>
{
    "data": {
        "networkId": string
        "category": string <span color="#1b1ef7"> // app/auth; defaults to 'app'</span>
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "networkId": string
        "category": string
        "applicationId": string
        "updated": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="remove-default-application"></a>

### Remove default application

**Method:** websocket

**Endpoint:** application:removeDefaultApplication

**Description:** Clears networkId's default application, if any. Requires the global release permission (system developers).

**Request:** 

<pre>
{
    "data": {
        "networkId": string
        "category": string <span color="#1b1ef7"> // app/auth; defaults to 'app'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-default-application"></a>

### Get default application

**Method:** websocket

**Endpoint:** application:getDefaultApplication

**Description:** Resolves networkId's default application to its currently published version.

**Request:** 

<pre>
{
    "data": {
        "networkId": string <span color="#1b1ef7"> // defaults to the caller's current network</span>
        "category": string <span color="#1b1ef7"> // app/auth; defaults to 'app'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "name": string
        "description": string
        "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data from the released version: icons, client/interface settings, permissions, etc</span>
        "networks": [ string ] <span color="#1b1ef7"> // ['all'] or specific network ids the app is published in</span>
        "excludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
        "publishedAt": timestamp
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-application-version-reviews"></a>

### List application version reviews

**Method:** websocket

**Endpoint:** application:listVersionReviews

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "reviews": [{
            "applicationId": string
            "version": string
            "reviewId": string
            "reviewerId": string
            "decision": string <span color="#1b1ef7"> // approved/rejected, or empty for an advisory comment/annotation with no decision</span>
            "comment": string <span color="#1b1ef7"> // reviewer's note to the developer, or an advisory comment/annotation with no decision</span>
            "approvedNetworks": [ string ] <span color="#1b1ef7"> // audit copy of the networks approved by this decision; only meaningful when Decision is approved</span>
            "approvedExcludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
            "created": timestamp
            "invalidated": bool <span color="#1b1ef7"> // set when the version is pulled back to draft after this approval, kept for audit history</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="assign-application-role"></a>

### Assign application role

**Method:** websocket

**Endpoint:** application:assignRole

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "userId": string
        "roleId": string <span color="#1b1ef7"> // applicationAdmin/applicationTester (applicationOwner can be assigned via TransferApplicationOwnership)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="remove-application-role"></a>

### Remove application role

**Method:** websocket

**Endpoint:** application:removeRole

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "userId": string
        "roleId": string <span color="#1b1ef7"> // applicationAdmin/applicationTester (applicationOwner can be assigned via TransferApplicationOwnership)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-application-roles"></a>

### List application roles

**Method:** websocket

**Endpoint:** application:listRoles

**Description:** Lists users explicitly assigned an app-scoped role (owner/admin/tester) on this Application.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "roles": [{
            "userId": string
            "roleId": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="transfer-application-ownership"></a>

### Transfer application ownership

**Method:** websocket

**Endpoint:** application:transferOwnership

**Description:** Makes newOwnerUserId an Owner. If the caller was themselves an Owner, they're demoted to Admin afterward so they keep access instead of being locked out.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "newOwnerUserId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="add-external-tester"></a>

### Add external tester

**Method:** websocket

**Endpoint:** application:addExternalTester

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "userId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="remove-external-tester"></a>

### Remove external tester

**Method:** websocket

**Endpoint:** application:removeExternalTester

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
        "userId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="list-external-testers"></a>

### List external testers

**Method:** websocket

**Endpoint:** application:listExternalTesters

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "version": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "testers": [{
            "applicationId": string
            "version": string
            "userId": string
            "created": timestamp
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-published-applications"></a>

### Search published applications

**Method:** websocket

**Endpoint:** application:searchPublishedApplications

**Description:** End-user discovery/search: released applications/versions, optionally filtered by a case-insensitive substring match on name. Cursor-paginated: pass the response's NextCursor back as Cursor for the next page; empty NextCursor means done.

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // case-insensitive substring match against the application name; empty matches everything</span>
        "cursor": string <span color="#1b1ef7"> // opaque; omit for the first page, otherwise pass back the previous response's NextCursor</span>
        "limit": int <span color="#1b1ef7"> // page size, clamped server-side; omit for the default</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applications": [{
            "applicationId": string
            "version": string
            "name": string
            "description": string
            "customParams": map[string]{ custom structure } <span color="#1b1ef7"> // client-defined data from the released version: icons, client/interface settings, permissions, etc</span>
            "networks": [ string ] <span color="#1b1ef7"> // ['all'] or specific network ids the app is published in</span>
            "excludedNetworks": [ string ] <span color="#1b1ef7"> // excluded network ids, only meaningful alongside 'all'</span>
            "publishedAt": timestamp
        }]
        "nextCursor": string <span color="#1b1ef7"> // opaque; pass back as Cursor to fetch the next page. Empty means no more results</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-my-applications"></a>

### Search my applications

**Method:** websocket

**Endpoint:** application:searchMyApplications

**Description:** Owner/admin/internal-tester discovery/search: every application the caller has an app-scoped role on, optionally filtered by a case-insensitive substring match on name. Cursor-paginated: pass the response's NextCursor back as Cursor for the next page; empty NextCursor means done.

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // case-insensitive substring match against the application name; empty matches everything</span>
        "cursor": string <span color="#1b1ef7"> // opaque; omit for the first page, otherwise pass back the previous response's NextCursor</span>
        "limit": int <span color="#1b1ef7"> // page size, clamped server-side; omit for the default</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applications": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "name": string
            "description": string
            "version": string <span color="#1b1ef7"> // label of the most recently created version, e.g. v1.1.1 or v1.1.1#hash</span>
            "oidcClientId": string <span color="#1b1ef7"> // id of the separate AuthClient used for OIDC login; empty if not yet configured</span>
            "roleId": string <span color="#1b1ef7"> // applicationOwner/applicationAdmin/applicationTester</span>
        }]
        "nextCursor": string <span color="#1b1ef7"> // opaque; pass back as Cursor to fetch the next page. Empty means no more results</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-my-tester-assignments"></a>

### Search my tester assignments

**Method:** websocket

**Endpoint:** application:searchMyTesterAssignments

**Description:** External-tester discovery/search: application versions the caller was granted tester access to, optionally filtered by a case-insensitive substring match on name. Cursor-paginated: pass the response's NextCursor back as Cursor for the next page; empty NextCursor means done.

**Request:** 

<pre>
{
    "data": {
        "query": string <span color="#1b1ef7"> // case-insensitive substring match against the application name; empty matches everything</span>
        "cursor": string <span color="#1b1ef7"> // opaque; omit for the first page, otherwise pass back the previous response's NextCursor</span>
        "limit": int <span color="#1b1ef7"> // page size, clamped server-side; omit for the default</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "applications": [{
            "id": string
            "created": timestamp
            "updated": timestamp
            "name": string
            "description": string
            "version": string <span color="#1b1ef7"> // label of the most recently created version, e.g. v1.1.1 or v1.1.1#hash</span>
            "oidcClientId": string <span color="#1b1ef7"> // id of the separate AuthClient used for OIDC login; empty if not yet configured</span>
        }]
        "nextCursor": string <span color="#1b1ef7"> // opaque; pass back as Cursor to fetch the next page. Empty means no more results</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="search-application-review-queue"></a>

### Search application review queue

**Method:** websocket

**Endpoint:** application:searchReviewQueue

**Description:** System-reviewer discovery/search: applications tracked by the review queue, optionally filtered by Status (pending/approved/rejected) and/or a name substring. Results are ordered oldest-submitted-first. Requires the global release permission, or network administrator permission on at least one network - in which case results are scoped to entries overlapping the networks they administer.

**Request:** 

<pre>
{
    "data": {
        "status": string <span color="#1b1ef7"> // pending/approved/rejected; empty means all statuses</span>
        "query": string <span color="#1b1ef7"> // case-insensitive substring match against the application name; empty matches everything</span>
        "cursor": string <span color="#1b1ef7"> // opaque; omit for the first page, otherwise pass back the previous response's NextCursor</span>
        "limit": int <span color="#1b1ef7"> // page size, clamped server-side; omit for the default</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "versions": [{
            "applicationId": string
            "version": string
            "name": string
            "status": string <span color="#1b1ef7"> // pending/approved/rejected</span>
            "submittedAt": timestamp
            "decidedAt": timestamp
            "reviewerId": string
            "requestedNetworks": [ string ] <span color="#1b1ef7"> // denormalized from the submission's ApplicationVersion</span>
            "requestedExcludedNetworks": [ string ] <span color="#1b1ef7"> // denormalized from the submission's ApplicationVersion</span>
            "submitComment": string <span color="#1b1ef7"> // denormalized from the submission's ApplicationVersion</span>
        }]
        "nextCursor": string <span color="#1b1ef7"> // opaque; pass back as Cursor to fetch the next page. Empty means no more results</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-identity-token"></a>

### Get identity token

**Method:** websocket

**Endpoint:** appManifest:getIdentityToken

**Description:** Issues a short-lived signed identity JWT for the given application. Requires the user to be authenticated. JWT claims: sub=userId, aud=applicationId, iss=platform, exp=5min, email=user email.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "token": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-application-client-credentials"></a>

### Create application client credentials

**Method:** websocket

**Endpoint:** application:createClientCredentials

**Description:** Generates a clientId/clientSecret pair the application can use to call the partner API as itself. There's exactly one set of credentials per application; this fails if one already exists - use regenerateClientCredentials to rotate it, or delete it first. The plaintext secret is only ever returned here; afterward, use revealClientCredentialsSecret.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientSecret": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="regenerate-application-client-credentials"></a>

### Regenerate application client credentials

**Method:** websocket

**Endpoint:** application:regenerateClientCredentials

**Description:** Rotates the secret of an already-existing client, keeping its clientId and every other field unchanged. The previous secret is invalidated immediately. Fails if no credentials exist yet - use createClientCredentials first.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientSecret": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-application-client-credentials"></a>

### Delete application client credentials

**Method:** websocket

**Endpoint:** application:deleteClientCredentials

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-application-client-credentials"></a>

### Get application client credentials

**Method:** websocket

**Endpoint:** application:getClientCredentials

**Description:** Returns the application's client info without its secret.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="reveal-application-client-credentials-secret"></a>

### Reveal application client credentials secret

**Method:** websocket

**Endpoint:** application:revealClientCredentialsSecret

**Description:** Returns the application's current client secret. Separate from getClientCredentials so the secret is only ever transmitted when explicitly asked for.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientSecret": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-application-oidc-client"></a>

### Create application oidc client

**Method:** websocket

**Endpoint:** application:createOidcClient

**Description:** Creates a dedicated OIDC client the application can use to let its own end users log in with their Roomful identity. There's exactly one OIDC client per application; this fails if one already exists - use regenerateOidcClientSecret to rotate its secret, or delete it first. The plaintext secret is only ever returned here or from regenerateOidcClientSecret - it cannot be revealed again afterward.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "redirectUris": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientSecret": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="regenerate-application-oidc-client-secret"></a>

### Regenerate application oidc client secret

**Method:** websocket

**Endpoint:** application:regenerateOidcClientSecret

**Description:** Rotates the secret of the application's existing OIDC client, keeping its clientId and every other field unchanged. The previous secret is invalidated immediately.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientSecret": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="delete-application-oidc-client"></a>

### Delete application oidc client

**Method:** websocket

**Endpoint:** application:deleteOidcClient

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="update-application-oidc-client-redirect-uris"></a>

### Update application oidc client redirect uris

**Method:** websocket

**Endpoint:** application:updateOidcClientRedirectUris

**Description:** Sets the application's OIDC client's whitelisted redirect URIs, replacing whatever was set before.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
        "redirectUris": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-application-oidc-client"></a>

### Get application oidc client

**Method:** websocket

**Endpoint:** application:getOidcClient

**Description:** Returns the application's OIDC client info without its secret.

**Request:** 

<pre>
{
    "data": {
        "applicationId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "clientId": string
        "clientName": string
        "scope": [ string ]
        "redirectUris": [ string ]
        "authPageUrl": string
        "devMode": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

