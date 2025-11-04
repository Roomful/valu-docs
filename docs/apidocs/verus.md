<br>

<a name="verus-api"></a>

## Verus API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/verus/checkChallenge](#check-verus-challenge) | webRequest | Check Verus challenge |
| [/verus/signDisclaimer](#sign-disclaimer-with-verus) | webRequest | Sign disclaimer with Verus |
| [/verus/signDisclaimer/checkChallenge](#check-verus-challenge-for-sign-disclaimer) | webRequest | Check Verus challenge for sign disclaimer |
| [/verus/purchaseContent](#purchase-content-with-verus) | webRequest | Purchase content with Verus |
| [/verus/purchaseContent/checkChallenge](#check-verus-challenge-for-purchase-content) | webRequest | Check Verus challenge for purchase content |
| [/verus/verusIdLoginResponse](#proxy-response-from-verus-to-crypto-server-) | webRequest | Proxy response from Verus to crypto server. |
| [/verus/verusIdLoginResponseTestnet](#proxy-response-from-verus-to-crypto-server-testnet-) | webRequest | Proxy response from Verus to crypto server (Testnet). |
| [/verus/getChallengeDeeplink](#get-verus-deeplink-by-challenge-id-) | webRequest | Get Verus deeplink by challenge id. |
| [/verus/signMessageByUserResponse](#proxy-response-from-verus-to-crypto-server-) | webRequest | Proxy response from Verus to crypto server. |
| [/verus/claimsSendResponse](#proxy-response-from-verus-to-crypto-server-) | webRequest | Proxy response from Verus to crypto server. |
| [/verus/claimsSendResponseTestnet](#proxy-response-from-verus-to-crypto-server-testnet-) | webRequest | Proxy response from Verus to crypto server (Testnet). |
| [/verus/createAndSignEndorsementResponse](#proxy-response-from-verus-to-crypto-server-) | webRequest | Proxy response from Verus to crypto server. |
| [/verus/createAndSignEndorsementResponseTestnet](#proxy-response-from-verus-to-crypto-server-testnet-) | webRequest | Proxy response from Verus to crypto server (Testnet). |
| [/verus/getClaimsData](#api-returns-claims-data-that-should-be-saved-by-verus-wallet-using-one-time-token-) | webRequest | Api returns claims data that should be saved by Verus wallet (using one time token). |
| [/verus/getClaimsData/{challengeId}](#api-returns-claims-data-that-should-be-saved-by-verus-wallet-using-challengeid-) | webRequest | Api returns claims data that should be saved by Verus wallet (using challengeId). |
| [/verus/getAttestationResponse](#proxy-response-from-verus-to-crypto-server-) | webRequest | Proxy response from Verus to crypto server. |
| [/verus/getAttestationProofsResponse](#proxy-response-from-verus-to-crypto-server-) | webRequest | Proxy response from Verus to crypto server. |
| [/agreement/{agreementType}?...queryParameters](#show-agreement-page-) | webRequest | Show agreement page. |
| [verus:getScopedRootKey](#get-scoped-root-key-from-verus-wallet) | websocket | Get scoped root key from Verus wallet |
| [verus:createAlbum](#create-album-using-verus) | websocket | Create album using Verus |
| [verus:listAlbumForSale](#list-album-for-sale-using-verus) | websocket | List album for sale using Verus |
| [verus:giftAlbum](#gift-album-using-verus) | websocket | Gift album using Verus |
| [verus:getCreatedPlaylist](#get-created-playlist-using-verus) | websocket | Get Created playlist using Verus |
| [verus:getNewPlaylist](#get-new-playlist-using-verus) | websocket | Get New playlist using Verus |
| [verus:getMyPlaylist](#get-my-playlist-using-verus) | websocket | Get My playlist using Verus |
| [verus:signDisclaimer](#sign-disclaimer-using-verus) | websocket | Sign disclaimer using Verus |
| [verus:purchaseContent](#purchase-content-using-verus) | websocket | Purchase content using Verus |
| [verus:sendMoneyToUser](#verus-send-money-to-user) | websocket | Verus send money to user |
| [verus:sendMoneyToIdentity](#verus-send-money-to-identity) | websocket | Verus send money to identity |
| [verus:exchangeCrypto](#verus-exchange-crypto) | websocket | Verus exchange crypto |
| [verus:getUserBalance](#verus-get-user-balance) | websocket | Verus get user balance |
| [verus:getExchangeRate](#verus-get-exchange-rate) | websocket | Verus get exchange rate |
| [verus:getExchangeRates](#verus-get-exchange-rates) | websocket | Verus get exchange rates |
| [verus:getVerusCoinPrice](#get-verus-coin-price) | websocket | Get verus coin price |
| [verus:getTransactionStatusHistory](#verus-get-transaction-status-history) | websocket | Verus get transaction status history |
| [verus:listTransactionStatusHistory](#verus-list-transaction-status-history) | websocket | Verus list transaction status history |
| ~~[verus:createVerifiableMessage](#verus-create-verifiable-statement-message)~~ | websocket | Verus create verifiable statement message |
| [verus:createStatementClaim](#verus-create-statement-claim) | websocket | Verus create statement claim |
| ~~[verus:createVerifiableSocialAccount](#verus-create-verifiable-social-account)~~ | websocket | Verus create verifiable social account |
| [verus:createSocialAccountClaim](#verus-create-social-account-claim) | websocket | Verus create social account claim |
| ~~[verus:createVerifiableSkillMessage](#verus-create-verifiable-skill-message)~~ | websocket | Verus create verifiable skill message |
| [verus:createSkillClaim](#verus-create-skill-claim) | websocket | Verus create skill claim |
| ~~[verus:createVerifiableWorkExperienceMessage](#verus-create-verifiable-work-experience-message)~~ | websocket | Verus create verifiable work experience message |
| [verus:createWorkExperienceClaim](#verus-create-work-experience-claim) | websocket | Verus create work experience claim |
| ~~[verus:createVerifiableEducationMessage](#verus-create-verifiable-education-message)~~ | websocket | Verus create verifiable education message |
| [verus:createEducationClaim](#verus-create-education-claim) | websocket | Verus create education claim |
| ~~[verus:createVerifiableAchievementMessage](#verus-create-verifiable-achievement-message)~~ | websocket | Verus create verifiable achievement message |
| [verus:createAchievementClaim](#verus-create-achievement-claim) | websocket | Verus create achievement claim |
| ~~[verus:deleteVerifiableMessage](#verus-delete-verifiable-message)~~ | websocket | Verus delete verifiable message |
| [verus:deleteTargetAttestationClaim](#verus-delete-target-attestation-claim) | websocket | Verus delete target attestation claim |
| [verus:deleteAttestationClaim](#verus-delete-attestation-claim) | websocket | Verus delete attestation claim |
| ~~[verus:updateVerifiableWorkExperienceMessage](#verus-update-verifiable-work-experience-message)~~ | websocket | Verus update verifiable work experience message |
| [verus:updateWorkExperienceClaim](#verus-update-work-experience-claim) | websocket | Verus update work experience claim |
| ~~[verus:updateVerifiableEducationMessage](#verus-update-verifiable-education-message)~~ | websocket | Verus update verifiable education message |
| [verus:updateEducationClaim](#verus-update-education-claim) | websocket | Verus update education claim |
| ~~[verus:updateVerifiableAchievementMessage](#verus-update-verifiable-achievement-message)~~ | websocket | Verus update verifiable achievement message |
| [verus:updateAchievementClaim](#verus-update-achievement-claim) | websocket | Verus update achievement claim |
| ~~[verus:listVerifiableMessages](#verus-list-verifiable-statement-messages)~~ | websocket | Verus list verifiable statement messages |
| [verus:listAttestationClaims](#verus-list-attestation-claims) | websocket | Verus list attestation claims |
| [verus:listStatementClaims](#verus-list-statement-claims) | websocket | Verus list statement claims |
| ~~[verus:listVerifiableSkillMessages](#verus-list-verifiable-skill-messages)~~ | websocket | Verus list verifiable skill messages |
| [verus:listSkillClaims](#verus-list-skill-claims) | websocket | Verus list skill claims |
| ~~[verus:listVerifiableWorkExperienceMessages](#verus-list-verifiable-work-experience-messages)~~ | websocket | Verus list verifiable work experience messages |
| [verus:listWorkExperienceClaims](#verus-list-work-experience-claims) | websocket | Verus list work experience claims |
| ~~[verus:listVerifiableEducationMessages](#verus-list-verifiable-education-messages)~~ | websocket | Verus list verifiable education messages |
| [verus:listEducationClaims](#verus-list-education-claims) | websocket | Verus list education claims |
| ~~[verus:listVerifiableAchievementMessages](#verus-list-verifiable-achievement-messages)~~ | websocket | Verus list verifiable achievement messages |
| [verus:listAchievementClaims](#verus-list-achievement-claims) | websocket | Verus list achievement claims |
| [verus:searchSkillTags](#verus-search-skill-tags) | websocket | Verus search skill tags |
| ~~[verus:listVerifiableMessageSignatures](#verus-list-verifiable-message-signatures)~~ | websocket | Verus list verifiable message signatures |
| [verus:listAttestationClaimSignatures](#verus-list-attestation-claim-signatures) | websocket | Verus list attestation claim signatures |
| [verus:listUserEndorsements](#verus-list-user-endorsements) | websocket | Verus list user endorsements |
| [verus:listUserEndorsementsWithClaims](#verus-list-user-endorsements-with-claims) | websocket | Verus list user endorsements with claims |
| ~~[verus:getDeeplinkToVerifyMessage](#verus-get-deeplink-to-verify-message)~~ | websocket | Verus get deeplink to verify message |
| [verus:getDeeplinkToVerifyAttestationClaim](#verus-get-deeplink-to-verify-attestation-claim) | websocket | Verus get deeplink to verify attestation claim |
| ~~[verus:listVerifiableSocialAccounts](#verus-list-verifiable-social-accounts)~~ | websocket | Verus list verifiable social accounts |
| [verus:listSocialAccountsClaims](#verus-list-social-accounts-claims) | websocket | Verus list social accounts claims |
| [verus:provideProofToVerifySocialAccount](#verus-provide-proof-to-verify-social-account) | websocket | Verus provide proof to verify social account |
| [verus:getDeeplinkToSaveClaims](#verus-get-deeplink-to-save-claims) | websocket | Verus get deeplink to save claims |
| [verus:getDeeplinkToSignCredential](#verus-get-deeplink-to-sign-credential) | websocket | Verus get deeplink to sign credential |
| [verus:getDeeplinkToCreateEndorsement](#verus-get-deeplink-to-create-endorsement) | websocket | Verus get deeplink to create endorsement |
| [verus:saveEndorsementsToBlockchain](#verus-save-endorsements-to-blockchain) | websocket | Verus save endorsements to blockchain |
| ~~[verus:getEndorsementHash](#verus-get-endorsement-hash)~~ | websocket | Verus get endorsement hash |
| [verus:getEndorsementVerifyLink](#verus-get-endorsement-verify-link) | websocket | Verus get endorsement verify link |
| [verus:createCredentialTemplate](#verus-create-credential-template) | websocket | Verus create credential template |
| [verus:deleteCredentialTemplate](#verus-delete-credential-template) | websocket | Verus delete credential template |
| [verus:listCredentialTemplates](#verus-list-credential-templates) | websocket | Verus list credential templates |
| [verus:grantCredential](#verus-grant-credential) | websocket | Verus grant credential |
| [verus:listCredentials](#verus-list-credentials) | websocket | Verus list credentials |
| [verus:revokeCredential](#verus-revoke-credential) | websocket | Verus revoke credential |
| [verus:synchronizeClaimsAndEndorsements](#verus-synchronize-claims-and-endorsements) | websocket | Verus synchronize claims and endorsements |
| [verus:getDeeplinkForAttestationProofsFromWallet](#verus-get-deeplink-for-attestation-proofs-from-wallet) | websocket | Verus get deeplink for attestation proofs from wallet |
| [verus:getDeeplinkForAttestationValuesFromWallet](#verus-get-deeplink-for-attestation-values-from-wallet) | websocket | Verus get deeplink for attestation values from wallet |
| ~~[verus:getDeeplinkForAttestation](#verus-get-deeplink-for-attestation)~~ | websocket | Verus get deeplink for attestation |
| ~~[verus:getDeeplinkForAttestationProofs](#verus-get-deeplink-for-attestation-proofs)~~ | websocket | Verus get deeplink for attestation proofs |
| [verus:getUserAttestation](#verus-get-user-attestation) | websocket | Verus get user attestation |
| [verus:createAttestationBlock](#verus-create-attestation-block) | websocket | Verus create attestation block |
| [verus:deleteAttestationBlock](#verus-delete-attestation-block) | websocket | Verus delete attestation block |
| [verus:updateAttestationBlock](#verus-update-attestation-block) | websocket | Verus update attestation block |
| [verus:publishAttestationBlock](#verus-publish-attestation-block) | websocket | Verus publish attestation block |
| [verus:listAttestationBlocks](#verus-list-attestation-blocks) | websocket | Verus list attestation blocks |
| ~~[verus:getAttestationBlocksForUser](#verus-get-attestation-blocks-for-user)~~ | websocket | Verus get attestation blocks for user |
| [verus:listAttestationBlocksForUser](#verus-list-attestation-blocks-for-user) | websocket | Verus list attestation blocks for user |
| [verus:setAnswersForAttestationBlock](#verus-set-answers-for-attestation-block) | websocket | Verus set answers for attestation block |
| [verus:setAnswersForBlock](#verus-set-answers-for-block) | websocket | Verus set answers for block |
| [verus:getBlockVDXFKeysBySuffix](#verus-get-block-vdxf-keys-by-suffix) | websocket | Verus get block vDXF keys by suffix |
| [verus:createCurrencyIdentity](#verus-create-currency-identity) | websocket | Verus create currency identity |
| [verus:checkCurrencyIdentityName](#verus-check-currency-identity-name) | websocket | Verus check currency identity name |
| [verus:changeCurrencyOwner](#verus-change-currency-owner) | websocket | Verus change currency owner |
| [verus:mintNFTOnCurrency](#verus-mint-nft-on-currency) | websocket | Verus mint nFT on currency |
| [verus:listIdentitiesFromWalletOnCurrency](#verus-list-identities-from-wallet-on-currency) | websocket | Verus list identities from wallet on currency |
| [verus:getAllIdentitiesInWalletOnCurrency](#verus-get-all-identities-in-wallet-on-currency) | websocket | Verus get all identities in wallet on currency |
| [verus:getProvisionDeeplink](#verus-get-provision-deeplink) | websocket | Verus get provision deeplink |
| ~~[verus:verifiableStatementCreated](#on-attestation-statement-claim-created-event-deprecated)~~ | websocketEvent | On attestation statement claim created event: deprecated |
| [verus:statementClaimCreated](#on-attestation-statement-claim-created-event) | websocketEvent | On attestation statement claim created event |
| ~~[verus:verifiableSocialAccountCreated](#on-attestation-social-account-claim-created-event-deprecated)~~ | websocketEvent | On attestation social account claim created event: deprecated |
| [verus:socialAccountClaimCreated](#on-attestation-social-account-claim-created-event) | websocketEvent | On attestation social account claim created event |
| ~~[verus:verifiableSkillCreated](#on-attestation-skill-claim-created-event-deprecated)~~ | websocketEvent | On attestation skill claim created event: deprecated |
| [verus:skillClaimCreated](#on-attestation-skill-claim-created-event) | websocketEvent | On attestation skill claim created event |
| ~~[verus:verifiableWorkExperienceCreated](#on-attestation-work-experience-claim-created-event-deprecated)~~ | websocketEvent | On attestation work experience claim created event: deprecated |
| [verus:workExperienceClaimCreated](#on-attestation-work-experience-claim-created-event) | websocketEvent | On attestation work experience claim created event |
| ~~[verus:verifiableEducationCreated](#on-attestation-education-claim-created-event-deprecated)~~ | websocketEvent | On attestation education claim created event: deprecated |
| [verus:educationClaimCreated](#on-attestation-education-claim-created-event) | websocketEvent | On attestation education claim created event |
| [verus:achievementClaimCreated](#on-attestation-achievement-claim-created-event) | websocketEvent | On attestation achievement claim created event |
| [verus:attestationBlockClaimCreated](#on-attestation-block-claim-created-event) | websocketEvent | On attestation block claim created event |
| [verus:attestationBlockClaimsCreated](#on-attestation-block-claims-created-event) | websocketEvent | On attestation block claims created event |
| ~~[verus:verifiableStatementDeleted](#on-attestation-statement-claim-deleted-event-deprecated)~~ | websocketEvent | On attestation statement claim deleted event: deprecated |
| [verus:statementClaimDeleted](#on-attestation-statement-claim-deleted-event) | websocketEvent | On attestation statement claim deleted event |
| ~~[verus:verifiableSocialAccountDeleted](#on-attestation-social-account-claim-deleted-event-deprecated)~~ | websocketEvent | On attestation social account claim deleted event deprecated |
| [verus:socialAccountClaimDeleted](#on-attestation-social-account-claim-deleted-event) | websocketEvent | On attestation social account claim deleted event |
| ~~[verus:verifiableSkillDeleted](#on-attestation-skill-claim-deleted-event-deprecated)~~ | websocketEvent | On attestation skill claim deleted event: deprecated |
| [verus:skillClaimDeleted](#on-attestation-skill-claim-deleted-event) | websocketEvent | On attestation skill claim deleted event |
| ~~[verus:verifiableWorkExperienceDeleted](#on-attestation-work-experience-claim-deleted-event-deprecated)~~ | websocketEvent | On attestation work experience claim deleted event: deprecated |
| [verus:workExperienceClaimDeleted](#on-attestation-work-experience-claim-deleted-event) | websocketEvent | On attestation work experience claim deleted event |
| ~~[verus:verifiableEducationDeleted](#on-attestation-education-claim-deleted-event-deprecated)~~ | websocketEvent | On attestation education claim deleted event: deprecated |
| [verus:educationClaimDeleted](#on-attestation-education-claim-deleted-event) | websocketEvent | On attestation education claim deleted event |
| [verus:achievementClaimDeleted](#on-attestation-achievement-claim-deleted-event) | websocketEvent | On attestation achievement claim deleted event |
| [verus:attestationBlockClaimDeleted](#on-attestation-block-claim-deleted-event) | websocketEvent | On attestation block claim deleted event |
| ~~[verus:verifiableStatementUpdated](#on-attestation-statement-claim-updated-event-deprecated)~~ | websocketEvent | On attestation statement claim updated event: deprecated |
| [verus:statementClaimUpdated](#on-attestation-statement-claim-updated-event) | websocketEvent | On attestation statement claim updated event |
| ~~[verus:verifiableSocialAccountUpdated](#on-attestation-social-account-claim-updated-event-deprecated)~~ | websocketEvent | On attestation social account claim updated event: deprecated |
| [verus:socialAccountClaimUpdated](#on-attestation-social-account-claim-updated-event) | websocketEvent | On attestation social account claim updated event |
| ~~[verus:verifiableSkillUpdated](#on-attestation-skill-claim-updated-event-deprecated)~~ | websocketEvent | On attestation skill claim updated event: deprecated |
| [verus:skillClaimUpdated](#on-attestation-skill-claim-updated-event) | websocketEvent | On attestation skill claim updated event |
| ~~[verus:verifiableWorkExperienceUpdated](#on-attestation-work-experience-claim-updated-event-deprecated)~~ | websocketEvent | On attestation work experience claim updated event: deprecated |
| [verus:workExperienceClaimUpdated](#on-attestation-work-experience-claim-updated-event) | websocketEvent | On attestation work experience claim updated event |
| ~~[verus:verifiableEducationUpdated](#on-attestation-education-claim-updated-event-deprecated)~~ | websocketEvent | On attestation education claim updated event: deprecated |
| [verus:educationClaimUpdated](#on-attestation-education-claim-updated-event) | websocketEvent | On attestation education claim updated event |
| [verus:achievementClaimUpdated](#on-attestation-achievement-claim-updated-event) | websocketEvent | On attestation achievement claim updated event |
| [verus:blockClaimUpdated](#on-attestation-block-claim-updated-event) | websocketEvent | On attestation block claim updated event |
| ~~[verus:verifySocialAccountProofResultEvent](#on-verify-social-account-proof-result-event-deprecated)~~ | websocketEvent | On verify social account proof result event: deprecated |
| [verus:socialAccountProofResultEvent](#on-verify-social-account-proof-result-event) | websocketEvent | On verify social account proof result event |
| ~~[verus:signatureForVerifiableStatementCreated](#on-new-signature-for-attestation-statement-claim-event-deprecated)~~ | websocketEvent | On new signature for attestation statement claim event: deprecated |
| [verus:signatureForStatementClaimCreated](#on-new-signature-for-attestation-statement-claim-event) | websocketEvent | On new signature for attestation statement claim event |
| ~~[verus:signatureForVerifiableSkillCreated](#on-new-signature-for-attestation-skill-claim-event-deprecated)~~ | websocketEvent | On new signature for attestation skill claim event: deprecated |
| [verus:signatureForSkillClaimCreated](#on-new-signature-for-attestation-skill-claim-event) | websocketEvent | On new signature for attestation skill claim event |
| ~~[verus:signatureForVerifiableWorkExperienceCreated](#on-new-signature-for-attestation-work-experience-claim-event-deprecated)~~ | websocketEvent | On new signature for attestation work experience claim event: deprecated |
| [verus:signatureForWorkExperienceClaimCreated](#on-new-signature-for-attestation-work-experience-claim-event) | websocketEvent | On new signature for attestation work experience claim event |
| ~~[verus:signatureForVerifiableEducationCreated](#on-new-signature-for-attestation-education-claim-event-deprecated)~~ | websocketEvent | On new signature for attestation education claim event: deprecated |
| [verus:signatureForEducationClaimCreated](#on-new-signature-for-attestation-education-claim-event) | websocketEvent | On new signature for attestation education claim event |
| [verus:signatureForAchievementClaimCreated](#on-new-signature-for-attestation-achievement-claim-event) | websocketEvent | On new signature for attestation achievement claim event |
| [verus:signatureForBlockClaimCreated](#on-new-signature-for-attestation-block-claim-event) | websocketEvent | On new signature for attestation block claim event |
| [verus:signDisclaimerSuccess](#verus-sign-disclaimer-success-event) | websocketEvent | Verus sign disclaimer success event |
| [verus:signDisclaimerError](#verus-sign-disclaimer-error-event) | websocketEvent | Verus sign disclaimer error event |
| [verus:purchaseContentSuccess](#verus-purchase-content-success-event) | websocketEvent | Verus purchase content success event |
| [verus:purchaseContentError](#verus-purchase-content-error-event) | websocketEvent | Verus purchase content error event |
| [verus:albumCreated](#verus-album-created-event) | websocketEvent | Verus album created event |
| [verus:albumCreateError](#verus-album-create-error-event) | websocketEvent | Verus album create error event |
| [verus:albumPurchased](#verus-album-purchased-event) | websocketEvent | Verus album purchased event |
| [verus:albumPurchaseError](#verus-album-purchase-error-event) | websocketEvent | Verus album purchase error event |
| [verus:createRoomSubscription](#create-room-subscription-with-verus) | websocketEvent | Create room subscription with Verus |
| [verus:createRoomSubscriptionSuccess](#verus-create-room-subscription-success-event) | websocketEvent | Verus create room subscription success event |
| [verus:createRoomSubscriptionError](#verus-create-room-subscription-error-event) | websocketEvent | Verus create room subscription error event |
| [verus:transactionStatusUpdated](#verus-transaction-status-updated-event) | websocketEvent | Verus transaction status updated event |
| [verus:linkPersonaAccountResultEvent](#verus-link-persona-account-result-event) | websocketEvent | Verus link persona account result event |
| [verus:getScopedRootKeyResultEvent](#verus-get-scoped-root-key-result-event) | websocketEvent | Verus get scoped root key result event |
| ~~[verus:verifyMessageResultEvent](#on-verus-verify-message-result-event-deprecated)~~ | websocketEvent | On verus verify message result event: deprecated |
| [verus:verifyAttestationClaimResultEvent](#verus-verify-attestation-claim-result-event) | websocketEvent | Verus verify attestation claim result event |
| ~~[verus:verifySocialAccountResultEvent](#on-verus-verify-social-account-result-event-deprecated)~~ | websocketEvent | On verus verify social account result event: deprecated |
| [verus:verifySocialAccountClaimResultEvent](#verus-verify-social-account-result-event) | websocketEvent | Verus verify social account result event |
| [verus:saveClaimsResultEvent](#verus-save-claims-result-event) | websocketEvent | Verus save claims result event |
| [verus:createEndorsementResultEvent](#verus-create-endorsement-result-event) | websocketEvent | Verus create endorsement result event |
| [verus:saveEndorsementResultEvent](#verus-save-endorsement-result-event) | websocketEvent | Verus save endorsement result event |
| [verus:getAttestationResultEvent](#verus-get-attestation-result-event) | websocketEvent | Verus get attestation result event |
| [verus:getAttestationProofsResultEvent](#verus-get-attestation-proofs-result-event) | websocketEvent | Verus get attestation proofs result event |
| [verus:getAttestationValuesResultEvent](#verus-get-attestation-values-result-event) | websocketEvent | Verus get attestation values result event |
| [verus:transferIdentityEvent](#on-verus-transfer-identity-event) | websocketEvent | On verus transfer identity event |
| [verus:nftMintedEvent](#on-verus-nft-minted-event) | websocketEvent | On verus nft minted event |
| [verus:paymentReadyEvent](#on-verus-payment-ready-event) | websocketEvent | On verus payment ready event |
| [verus:currencyReadyEvent](#on-verus-currency-ready-event) | websocketEvent | On verus currency ready event |

<br>

<a name="check-verus-challenge"></a>

### Check Verus challenge

**HTTP Method:** POST

**Path:** /verus/checkChallenge

**Description:** Api returns error in case if Verus verification is not ready yet or failed. Api returns empty response if Verus verification succeeded.

**Request:** 

<pre>
{
    "challengeId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="sign-disclaimer-with-verus"></a>

### Sign disclaimer with Verus

**HTTP Method:** POST

**Path:** /verus/signDisclaimer

**Description:** Verus sign disclaimer for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/verus/signDisclaimer/checkChallenge``` endpoint for checking Verus sign disclaimer result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
}
</pre>

**Response:** 

<pre>
{
    "challengeId": string
    "deepLink": string
}
</pre>

<br>

<a name="check-verus-challenge-for-sign-disclaimer"></a>

### Check Verus challenge for sign disclaimer

**HTTP Method:** POST

**Path:** /verus/signDisclaimer/checkChallenge

**Description:** Checks Verus sign disclaimer result after ```/verus/signDisclaimer```.

**Request:** 

<pre>
{
    "challengeId": string
}
</pre>

**Response:** 

<pre>
{
    "signature": string
}
</pre>

<br>

<a name="purchase-content-with-verus"></a>

### Purchase content with Verus

**HTTP Method:** POST

**Path:** /verus/purchaseContent

**Description:** Verus purchase content for mobile platforms. Endpoint creates Verus challenge and returns ```challengeId``` and ```deeplink```. Client opens Verus application with deeplink and authorizes with Verus account. After successful authorization, Verus application redirects client to ```redirectUrl```. When client returned to Valuverse application it should call ```/verus/purchaseContent/checkChallenge``` endpoint for checking Verus purchase content result.

**Request:** 

<pre>
{
    "redirectUrl": string
    "isMobile": bool
    "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
    "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
    "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    "contentIdentity": string
    "numCopies": int
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="check-verus-challenge-for-purchase-content"></a>

### Check Verus challenge for purchase content

**HTTP Method:** POST

**Path:** /verus/purchaseContent/checkChallenge

**Description:** Checks Verus purchase content result after ```/verus/purchaseContent```.

**Request:** 

<pre>
{
    "challengeId": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-"></a>

### Proxy response from Verus to crypto server.

**HTTP Method:** POST

**Path:** /verus/verusIdLoginResponse

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-testnet-"></a>

### Proxy response from Verus to crypto server (Testnet).

**HTTP Method:** POST

**Path:** /verus/verusIdLoginResponseTestnet

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-verus-deeplink-by-challenge-id-"></a>

### Get Verus deeplink by challenge id.

**HTTP Method:** POST

**Path:** /verus/getChallengeDeeplink

**Request:** 

<pre>
{
    "challengeId": string
}
</pre>

**Response:** 

<pre>
{
    "deepLink": string
}
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-"></a>

### Proxy response from Verus to crypto server.

**HTTP Method:** POST

**Path:** /verus/signMessageByUserResponse

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-"></a>

### Proxy response from Verus to crypto server.

**HTTP Method:** POST

**Path:** /verus/claimsSendResponse

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-testnet-"></a>

### Proxy response from Verus to crypto server (Testnet).

**HTTP Method:** POST

**Path:** /verus/claimsSendResponseTestnet

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-"></a>

### Proxy response from Verus to crypto server.

**HTTP Method:** POST

**Path:** /verus/createAndSignEndorsementResponse

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-testnet-"></a>

### Proxy response from Verus to crypto server (Testnet).

**HTTP Method:** POST

**Path:** /verus/createAndSignEndorsementResponseTestnet

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="api-returns-claims-data-that-should-be-saved-by-verus-wallet-using-one-time-token-"></a>

### Api returns claims data that should be saved by Verus wallet (using one time token).

**HTTP Method:** POST

**Path:** /verus/getClaimsData

**Parameters:** 

token: string

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
JSON body
</pre>

<br>

<a name="api-returns-claims-data-that-should-be-saved-by-verus-wallet-using-challengeid-"></a>

### Api returns claims data that should be saved by Verus wallet (using challengeId).

**HTTP Method:** POST

**Path:** /verus/getClaimsData/{challengeId}

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
JSON body
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-"></a>

### Proxy response from Verus to crypto server.

**HTTP Method:** POST

**Path:** /verus/getAttestationResponse

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="proxy-response-from-verus-to-crypto-server-"></a>

### Proxy response from Verus to crypto server.

**HTTP Method:** POST

**Path:** /verus/getAttestationProofsResponse

**Request:** 

<pre>
JSON body
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="show-agreement-page-"></a>

### Show agreement page.

**HTTP Method:** GET

**Path:** /agreement/{agreementType}?...queryParameters

**Description:** Path parameter `agreementType` could be one of: `verusPurchaseRoom`, `verusRentRoom`.

**Parameters:** 

`verusIdentity`, `subscriptionOption`, `priceInUsd`, `priceInVerus`, `roomName`

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="get-scoped-root-key-from-verus-wallet"></a>

### Get scoped root key from Verus wallet

**Method:** websocket

**Endpoint:** verus:getScopedRootKey

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```verus:getScopedRootKeyResultEvent``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-album-using-verus"></a>

### Create album using Verus

**Method:** websocket

**Endpoint:** verus:createAlbum

**Request:** 

<pre>
{
    "data": {
        "contentIdentity": string
        "contentData": {
            "artistName": string <span color="#1b1ef7"> // artist name</span>
            "albumName": string <span color="#1b1ef7"> // album name</span>
            "genre": string <span color="#1b1ef7"> // album genre</span>
            "url": string <span color="#1b1ef7"> // url to album within valuverse application (set by server)</span>
            "networkId": string <span color="#1b1ef7"> // metaverse network id (set by server)</span>
            "signature": string <span color="#1b1ef7"> // disclaimer signed by verus account, HASH string</span>
            "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
            "tracks": [{
                "resourceId": string
                "name": string
                "duration": float
            }]
            "albumCover": {
                "resourceId": string
            }
            "artistLogo": {
                "resourceId": string
            }
            "sleeveDocument": { <span color="#1b1ef7"> // table of contents, notes, lyrics</span>
                "resourceId": string
            }
        }
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

<a name="list-album-for-sale-using-verus"></a>

### List album for sale using Verus

**Method:** websocket

**Endpoint:** verus:listAlbumForSale

**Request:** 

<pre>
{
    "data": {
        "contentIdentity": string
        "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
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

<a name="gift-album-using-verus"></a>

### Gift album using Verus

**Method:** websocket

**Endpoint:** verus:giftAlbum

**Request:** 

<pre>
{
    "data": {
        "contentSubIdentity": string
        "recipientIdentity": string
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

<a name="get-created-playlist-using-verus"></a>

### Get Created playlist using Verus

**Method:** websocket

**Endpoint:** verus:getCreatedPlaylist

**Request:** 

<pre>
{
    "data": {
        "query": string
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "playlist": [{
            "creatorIdentity": string <span color="#1b1ef7"> // verus identity of user who created an album</span>
            "contentIdentity": string <span color="#1b1ef7"> // verus identity of album original</span>
            "contentSubIdentity": string <span color="#1b1ef7"> // verus identity of album copy</span>
            "contentData": { <span color="#1b1ef7"> // album content</span>
                "artistName": string <span color="#1b1ef7"> // artist name</span>
                "albumName": string <span color="#1b1ef7"> // album name</span>
                "genre": string <span color="#1b1ef7"> // album genre</span>
                "url": string <span color="#1b1ef7"> // url to album within valuverse application (set by server)</span>
                "networkId": string <span color="#1b1ef7"> // metaverse network id (set by server)</span>
                "signature": string <span color="#1b1ef7"> // disclaimer signed by verus account, HASH string</span>
                "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
                "tracks": [{
                    "resourceId": string
                    "name": string
                    "duration": float
                }]
                "albumCover": {
                    "resourceId": string
                }
                "artistLogo": {
                    "resourceId": string
                }
                "sleeveDocument": { <span color="#1b1ef7"> // table of contents, notes, lyrics</span>
                    "resourceId": string
                }
            }
            "copiesSold": int <span color="#1b1ef7"> // amount of sold copies of original album</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-new-playlist-using-verus"></a>

### Get New playlist using Verus

**Method:** websocket

**Endpoint:** verus:getNewPlaylist

**Request:** 

<pre>
{
    "data": {
        "query": string
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "playlist": [{
            "creatorIdentity": string <span color="#1b1ef7"> // verus identity of user who created an album</span>
            "contentIdentity": string <span color="#1b1ef7"> // verus identity of album original</span>
            "contentSubIdentity": string <span color="#1b1ef7"> // verus identity of album copy</span>
            "contentData": { <span color="#1b1ef7"> // album content</span>
                "artistName": string <span color="#1b1ef7"> // artist name</span>
                "albumName": string <span color="#1b1ef7"> // album name</span>
                "genre": string <span color="#1b1ef7"> // album genre</span>
                "url": string <span color="#1b1ef7"> // url to album within valuverse application (set by server)</span>
                "networkId": string <span color="#1b1ef7"> // metaverse network id (set by server)</span>
                "signature": string <span color="#1b1ef7"> // disclaimer signed by verus account, HASH string</span>
                "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
                "tracks": [{
                    "resourceId": string
                    "name": string
                    "duration": float
                }]
                "albumCover": {
                    "resourceId": string
                }
                "artistLogo": {
                    "resourceId": string
                }
                "sleeveDocument": { <span color="#1b1ef7"> // table of contents, notes, lyrics</span>
                    "resourceId": string
                }
            }
            "copiesSold": int <span color="#1b1ef7"> // amount of sold copies of original album</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-my-playlist-using-verus"></a>

### Get My playlist using Verus

**Method:** websocket

**Endpoint:** verus:getMyPlaylist

**Request:** 

<pre>
{
    "data": {
        "query": string
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "playlist": [{
            "creatorIdentity": string <span color="#1b1ef7"> // verus identity of user who created an album</span>
            "contentIdentity": string <span color="#1b1ef7"> // verus identity of album original</span>
            "contentSubIdentity": string <span color="#1b1ef7"> // verus identity of album copy</span>
            "contentData": { <span color="#1b1ef7"> // album content</span>
                "artistName": string <span color="#1b1ef7"> // artist name</span>
                "albumName": string <span color="#1b1ef7"> // album name</span>
                "genre": string <span color="#1b1ef7"> // album genre</span>
                "url": string <span color="#1b1ef7"> // url to album within valuverse application (set by server)</span>
                "networkId": string <span color="#1b1ef7"> // metaverse network id (set by server)</span>
                "signature": string <span color="#1b1ef7"> // disclaimer signed by verus account, HASH string</span>
                "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
                "tracks": [{
                    "resourceId": string
                    "name": string
                    "duration": float
                }]
                "albumCover": {
                    "resourceId": string
                }
                "artistLogo": {
                    "resourceId": string
                }
                "sleeveDocument": { <span color="#1b1ef7"> // table of contents, notes, lyrics</span>
                    "resourceId": string
                }
            }
            "copiesSold": int <span color="#1b1ef7"> // amount of sold copies of original album</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="sign-disclaimer-using-verus"></a>

### Sign disclaimer using Verus

**Method:** websocket

**Endpoint:** verus:signDisclaimer

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```verus:signDisclaimerSuccess``` or ```verus:signDisclaimerError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="purchase-content-using-verus"></a>

### Purchase content using Verus

**Method:** websocket

**Endpoint:** verus:purchaseContent

**Description:** Endpoint returns deeplink that should be used for Verus authorization. After Verus authorization is finished, server sends ```verus:purchaseContentSuccess``` or ```verus:purchaseContentError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
        "contentIdentity": string
        "numCopies": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-send-money-to-user"></a>

### Verus send money to user

**Method:** websocket

**Endpoint:** verus:sendMoneyToUser

**Description:** Endpoint returns deeplink that should be used for Verus money transfer.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "amount": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-send-money-to-identity"></a>

### Verus send money to identity

**Method:** websocket

**Endpoint:** verus:sendMoneyToIdentity

**Description:** Endpoint returns deeplink that should be used for Verus money transfer.

**Request:** 

<pre>
{
    "data": {
        "targetIAddress": string
        "targetIdentity": string
        "amount": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-exchange-crypto"></a>

### Verus exchange crypto

**Method:** websocket

**Endpoint:** verus:exchangeCrypto

**Description:** Endpoint returns deeplink that should be used for Verus exchange crypto.

**Request:** 

<pre>
{
    "data": {
        "cryptoWalletAddress": string
        "amount": string <span color="#1b1ef7"> // amount + fees</span>
        "amountToSend": string <span color="#1b1ef7"> // actual amount to exchange</span>
        "convertTo": string <span color="#1b1ef7"> // convert to crypto currency</span>
        "transactionDescription": string
        "transactionSendDescription": string
        "transactionReceiveDescription": string
        "transactionFeesDescription": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-user-balance"></a>

### Verus get user balance

**Method:** websocket

**Endpoint:** verus:getUserBalance

**Description:** Endpoint returns Verus user balance.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "balance": float
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-exchange-rate"></a>

### Verus get exchange rate

**Method:** websocket

**Endpoint:** verus:getExchangeRate

**Description:** Endpoint returns exchange rate + fees for Verus.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "exchangeRate": float
        "feesInVerus": float
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-exchange-rates"></a>

### Verus get exchange rates

**Method:** websocket

**Endpoint:** verus:getExchangeRates

**Description:** Endpoint returns exchange rates + fees for Verus.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "currencies": map[string]{
            "exchangeRate": float
            "feesInVerus": float
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="get-verus-coin-price"></a>

### Get verus coin price

**Method:** websocket

**Endpoint:** verus:getVerusCoinPrice

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "data": {
        "time_open": timestamp
        "time_close": timestamp
        "open": float
        "high": float
        "low": float
        "close": float
        "volume": int
        "market_cap": int
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-transaction-status-history"></a>

### Verus get transaction status history

**Method:** websocket

**Endpoint:** verus:getTransactionStatusHistory

**Description:** Endpoint returns status history for a Verus transaction.

**Request:** 

<pre>
{
    "data": {
        "transactionId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "transaction": {
            "userId": string
            "transactionId": string
            "transactionDescription": string
            "transactionFrom": string
            "transactionTo": string
            "convertToCurrency": string
            "transactionSendDescription": string
            "transactionReceiveDescription": string
            "transactionFeesDescription": string
            "blockchainTransactionId": string
            "startDate": timestamp
            "lastUpdated": timestamp
            "statusHistory": [{
                "name": string
                "status": bool
                "error": string
                "timestamp": timestamp
            }]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-transaction-status-history"></a>

### Verus list transaction status history

**Method:** websocket

**Endpoint:** verus:listTransactionStatusHistory

**Description:** Endpoint returns status history for Verus transactions.

**Request:** 

<pre>
{
    "data": {
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "transactions": [{
            "userId": string
            "transactionId": string
            "transactionDescription": string
            "transactionFrom": string
            "transactionTo": string
            "convertToCurrency": string
            "transactionSendDescription": string
            "transactionReceiveDescription": string
            "transactionFeesDescription": string
            "blockchainTransactionId": string
            "startDate": timestamp
            "lastUpdated": timestamp
            "statusHistory": [{
                "name": string
                "status": bool
                "error": string
                "timestamp": timestamp
            }]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-verifiable-statement-message"></a>

### Verus create verifiable statement message

**Method:** websocket

**Endpoint:** verus:createVerifiableMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "message": string <span color="#1b1ef7"> // statement claim message</span>
        "title": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "title": string
            "statement": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-statement-claim"></a>

### Verus create statement claim

**Method:** websocket

**Endpoint:** verus:createStatementClaim

**Description:** Endpoint creates statement claim that could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "message": string <span color="#1b1ef7"> // statement claim message</span>
        "title": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "title": string
            "statement": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-verifiable-social-account"></a>

### Verus create verifiable social account

**Method:** websocket

**Endpoint:** verus:createVerifiableSocialAccount

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "socialType": string <span color="#1b1ef7"> // x/linkedin</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-social-account-claim"></a>

### Verus create social account claim

**Method:** websocket

**Endpoint:** verus:createSocialAccountClaim

**Description:** Endpoint creates claim that represents social account and could be verified by user using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "socialType": string <span color="#1b1ef7"> // x/linkedin</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-verifiable-skill-message"></a>

### Verus create verifiable skill message

**Method:** websocket

**Endpoint:** verus:createVerifiableSkillMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "skillTag": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "category": string
            "skillTag": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-skill-claim"></a>

### Verus create skill claim

**Method:** websocket

**Endpoint:** verus:createSkillClaim

**Description:** Endpoint creates claim that represent some skill and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "skillTag": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "category": string
            "skillTag": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-verifiable-work-experience-message"></a>

### Verus create verifiable work experience message

**Method:** websocket

**Endpoint:** verus:createVerifiableWorkExperienceMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-work-experience-claim"></a>

### Verus create work experience claim

**Method:** websocket

**Endpoint:** verus:createWorkExperienceClaim

**Description:** Endpoint creates claim that represent work experience and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-verifiable-education-message"></a>

### Verus create verifiable education message

**Method:** websocket

**Endpoint:** verus:createVerifiableEducationMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-education-claim"></a>

### Verus create education claim

**Method:** websocket

**Endpoint:** verus:createEducationClaim

**Description:** Endpoint creates claim that represent education and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-verifiable-achievement-message"></a>

### Verus create verifiable achievement message

**Method:** websocket

**Endpoint:** verus:createVerifiableAchievementMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-achievement-claim"></a>

### Verus create achievement claim

**Method:** websocket

**Endpoint:** verus:createAchievementClaim

**Description:** Endpoint creates claim that represent achievement and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-delete-verifiable-message"></a>

### Verus delete verifiable message

**Method:** websocket

**Endpoint:** verus:deleteVerifiableMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "messageId": string
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

<a name="verus-delete-target-attestation-claim"></a>

### Verus delete target attestation claim

**Method:** websocket

**Endpoint:** verus:deleteTargetAttestationClaim

**Description:** deletes any claim for admins

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "claimId": string
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

<a name="verus-delete-attestation-claim"></a>

### Verus delete attestation claim

**Method:** websocket

**Endpoint:** verus:deleteAttestationClaim

**Description:** Endpoint deletes Verus verifiable claim.

**Request:** 

<pre>
{
    "data": {
        "claimId": string
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

<a name="verus-update-verifiable-work-experience-message"></a>

### Verus update verifiable work experience message

**Method:** websocket

**Endpoint:** verus:updateVerifiableWorkExperienceMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "messageId": string
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-update-work-experience-claim"></a>

### Verus update work experience claim

**Method:** websocket

**Endpoint:** verus:updateWorkExperienceClaim

**Description:** Endpoint updates claim that represent work experience and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "claimId": string
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-update-verifiable-education-message"></a>

### Verus update verifiable education message

**Method:** websocket

**Endpoint:** verus:updateVerifiableEducationMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "messageId": string
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-update-education-claim"></a>

### Verus update education claim

**Method:** websocket

**Endpoint:** verus:updateEducationClaim

**Description:** Endpoint updates claim that represent education and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "claimId": string
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-update-verifiable-achievement-message"></a>

### Verus update verifiable achievement message

**Method:** websocket

**Endpoint:** verus:updateVerifiableAchievementMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "messageId": string
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-update-achievement-claim"></a>

### Verus update achievement claim

**Method:** websocket

**Endpoint:** verus:updateAchievementClaim

**Description:** Endpoint updates claim that represent achievement and could be verified by other users using Verus identity.

**Request:** 

<pre>
{
    "data": {
        "claimId": string
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-statement-messages"></a>

### Verus list verifiable statement messages

**Method:** websocket

**Endpoint:** verus:listVerifiableMessages

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "messages": [{
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "title": string
            "statement": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-attestation-claims"></a>

### Verus list attestation claims

**Method:** websocket

**Endpoint:** verus:listAttestationClaims

**Description:** Endpoint returns all statement claims for user.

**Request:** 

<pre>
{
    "data": {
        "targetUserId": string
        "claimType": string <span color="#1b1ef7"> // optional</span>
        "attestationType": string <span color="#1b1ef7"> // optional</span>
        "status": string <span color="#1b1ef7"> // optional</span>
        "formReference": string <span color="#1b1ef7"> // optional</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claims": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "claimType": string <span color="#1b1ef7"> // statement/socialAccount/skill/workExperience/education/achievement/block</span>
            "title": string
            "statement": string
            "category": string
            "skillTag": string
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
            "blockId": string
            "blockTitle": string
            "formReference": string
            "networkId": string
            "blockAnswers": [{
                "networkId": string
                "blockId": string
                "questionId": string
                "questionTitle": string
                "questionMessage": string
                "answerMessage": string
                "fieldReference": string
            }]
            "blockSchema": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-statement-claims"></a>

### Verus list statement claims

**Method:** websocket

**Endpoint:** verus:listStatementClaims

**Description:** Endpoint returns all statement claims for user.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claims": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "title": string
            "statement": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-skill-messages"></a>

### Verus list verifiable skill messages

**Method:** websocket

**Endpoint:** verus:listVerifiableSkillMessages

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "skills": [{
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "category": string
            "skillTag": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-skill-claims"></a>

### Verus list skill claims

**Method:** websocket

**Endpoint:** verus:listSkillClaims

**Description:** Endpoint returns all skill claims for user. Actual skillTag could be found by path.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "skills": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "category": string
            "skillTag": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-work-experience-messages"></a>

### Verus list verifiable work experience messages

**Method:** websocket

**Endpoint:** verus:listVerifiableWorkExperienceMessages

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "experiences": [{
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-work-experience-claims"></a>

### Verus list work experience claims

**Method:** websocket

**Endpoint:** verus:listWorkExperienceClaims

**Description:** Endpoint returns all work experience claims for user.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "experiences": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "companyName": string
            "position": string
            "location": string
            "description": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-education-messages"></a>

### Verus list verifiable education messages

**Method:** websocket

**Endpoint:** verus:listVerifiableEducationMessages

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "educations": [{
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-education-claims"></a>

### Verus list education claims

**Method:** websocket

**Endpoint:** verus:listEducationClaims

**Description:** Endpoint returns all education claims for user.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "educations": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "school": string
            "degree": string
            "fieldOfStudy": string
            "startDate": timestamp
            "endDate": timestamp
            "isContinuing": bool
            "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-achievement-messages"></a>

### Verus list verifiable achievement messages

**Method:** websocket

**Endpoint:** verus:listVerifiableAchievementMessages

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "achievements": [{
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-achievement-claims"></a>

### Verus list achievement claims

**Method:** websocket

**Endpoint:** verus:listAchievementClaims

**Description:** Endpoint returns all achievement claims for user.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "achievements": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "title": string
            "organization": string
            "issueDate": timestamp
            "expirationDate": timestamp
            "credentialsId": string
            "credentialsUrl": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-search-skill-tags"></a>

### Verus search skill tags

**Method:** websocket

**Endpoint:** verus:searchSkillTags

**Description:** Endpoint searches for tags that were previously used for verifiable skill messages generation.

**Request:** 

<pre>
{
    "data": {
        "query": string
        "offset": int
        "size": int
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "skillTags": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-message-signatures"></a>

### Verus list verifiable message signatures

**Method:** websocket

**Endpoint:** verus:listVerifiableMessageSignatures

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "messageId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "signatures": [{
            "messageId": string
            "userId": string
            "verifyIdentity": string <span color="#1b1ef7"> // Verus identity name that signed the message</span>
            "verifyIAddress": string <span color="#1b1ef7"> // Verus identity IAddress that signed the message</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the message</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-attestation-claim-signatures"></a>

### Verus list attestation claim signatures

**Method:** websocket

**Endpoint:** verus:listAttestationClaimSignatures

**Description:** Endpoint returns all Verus signatures for attestation claim.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "claimId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "signatures": [{
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-user-endorsements"></a>

### Verus list user endorsements

**Method:** websocket

**Endpoint:** verus:listUserEndorsements

**Description:** Endpoint returns all the endorsements of the calling user.

**Request:** 

<pre>
{
    "data": {
        "cursorClaimId": string
        "limit": int
        "status": string
        "attestationType": string <span color="#1b1ef7"> // attestation/credential</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "endorsements": [{
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }]
        "hasMore": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-user-endorsements-with-claims"></a>

### Verus list user endorsements with claims

**Method:** websocket

**Endpoint:** verus:listUserEndorsementsWithClaims

**Description:** Endpoint returns all the endorsements with claims of the calling user.

**Request:** 

<pre>
{
    "data": {
        "cursorClaimId": string
        "limit": int
        "status": string
        "attestationType": string <span color="#1b1ef7"> // attestation/credential</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "endorsementsWithClaims": [{
            "endorsement": {
                "claimId": string
                "claimAttestationType": string
                "claimType": string
                "claimUserId": string
                "userId": string <span color="#1b1ef7"> // endorser user id</span>
                "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
                "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
                "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
                "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
                "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
            }
            "claim": {
                "claimId": string
                "claimMessage": string
                "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
                "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
                "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
                "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
                "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
                "claimType": string <span color="#1b1ef7"> // statement/socialAccount/skill/workExperience/education/achievement/block</span>
                "title": string
                "statement": string
                "category": string
                "skillTag": string
                "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
                "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
                "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
                "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
                "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
                "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
                "companyName": string
                "position": string
                "location": string
                "description": string
                "startDate": timestamp
                "endDate": timestamp
                "isContinuing": bool
                "school": string
                "degree": string
                "fieldOfStudy": string
                "startDate": timestamp
                "endDate": timestamp
                "isContinuing": bool
                "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
                "title": string
                "organization": string
                "issueDate": timestamp
                "expirationDate": timestamp
                "credentialsId": string
                "credentialsUrl": string
                "blockId": string
                "blockTitle": string
                "formReference": string
                "networkId": string
                "blockAnswers": [{
                    "networkId": string
                    "blockId": string
                    "questionId": string
                    "questionTitle": string
                    "questionMessage": string
                    "answerMessage": string
                    "fieldReference": string
                }]
                "blockSchema": map[string]{ custom structure }
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-to-verify-message"></a>

### Verus get deeplink to verify message

**Method:** websocket

**Endpoint:** verus:getDeeplinkToVerifyMessage

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "messageId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-to-verify-attestation-claim"></a>

### Verus get deeplink to verify attestation claim

**Method:** websocket

**Endpoint:** verus:getDeeplinkToVerifyAttestationClaim

**Description:** Endpoint returns deeplink to user in order to verify attestation claim using Verus.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "claimId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-verifiable-social-accounts"></a>

### Verus list verifiable social accounts

**Method:** websocket

**Endpoint:** verus:listVerifiableSocialAccounts

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "socialAccounts": [{
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-social-accounts-claims"></a>

### Verus list social accounts claims

**Method:** websocket

**Endpoint:** verus:listSocialAccountsClaims

**Description:** Endpoint returns all Verus verifiable social accounts for user.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "socialAccounts": [{
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-provide-proof-to-verify-social-account"></a>

### Verus provide proof to verify social account

**Method:** websocket

**Endpoint:** verus:provideProofToVerifySocialAccount

**Description:** Endpoint uses link to post in social network in order to verify that user actually controls provided account.

**Request:** 

<pre>
{
    "data": {
        "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
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

<a name="verus-get-deeplink-to-save-claims"></a>

### Verus get deeplink to save claims

**Method:** websocket

**Endpoint:** verus:getDeeplinkToSaveClaims

**Description:** Endpoint returns deeplink to user in order to save attestation claims to Verus.

**Request:** 

<pre>
{
    "data": {
        "claimIds": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-to-sign-credential"></a>

### Verus get deeplink to sign credential

**Method:** websocket

**Endpoint:** verus:getDeeplinkToSignCredential

**Description:** Endpoint returns deeplink to user in order to save attestation claims to Verus.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string <span color="#1b1ef7"> // user id of the claim</span>
        "claimId": string
        "message": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-to-create-endorsement"></a>

### Verus get deeplink to create endorsement

**Method:** websocket

**Endpoint:** verus:getDeeplinkToCreateEndorsement

**Description:** Endpoint returns deeplink to user in order to create and sign endorsement for attestation claim.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "claimId": string
        "message": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-save-endorsements-to-blockchain"></a>

### Verus save endorsements to blockchain

**Method:** websocket

**Endpoint:** verus:saveEndorsementsToBlockchain

**Description:** Endpoint saves endorsements to Verus blockchain.

**Request:** 

<pre>
{
    "data": {
        "endorsementMap": map[string][ string ] <span color="#1b1ef7"> // map of claimId->userIds (list of users who endorsed the claim)</span>
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

<a name="verus-get-endorsement-hash"></a>

### Verus get endorsement hash

**Method:** websocket

**Endpoint:** verus:getEndorsementHash

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "claimId": string
        "userId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "hash": string
        "claimId": string
        "userId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-endorsement-verify-link"></a>

### Verus get endorsement verify link

**Method:** websocket

**Endpoint:** verus:getEndorsementVerifyLink

**Request:** 

<pre>
{
    "data": {
        "claimId": string
        "userId": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "claimId": string
        "userId": string
        "hash": string
        "identityName": string
        "signature": string
        "verifyLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-credential-template"></a>

### Verus create credential template

**Method:** websocket

**Endpoint:** verus:createCredentialTemplate

**Request:** 

<pre>
{
    "data": {
        "signatoryIds": [ string ] <span color="#1b1ef7"> // list of verus IDs who will sign the credentials from the template.</span>
        "blockId": string
        "blockAnswers": map[string]string <span color="#1b1ef7"> // map[questionId]answerString</span>
        "claimId": string <span color="#1b1ef7"> // in case of updating existing claim</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "userId": string
        "attestationType": string <span color="#1b1ef7"> // attestation/credential/credentialTemplate</span>
        "networkId": string <span color="#1b1ef7"> // only for credentials</span>
        "claimType": string <span color="#1b1ef7"> // statement/socialAccount/skill/workExperience/education/achievement/block</span>
        "referenceId": string <span color="#1b1ef7"> // blockchain reference id (64 length hexadecimal string)</span>
        "formReference": string <span color="#1b1ef7"> // form reference to filter the claim-blocks</span>
        "customData": { json data } <span color="#1b1ef7"> // in case if claim has additional data</span>
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-delete-credential-template"></a>

### Verus delete credential template

**Method:** websocket

**Endpoint:** verus:deleteCredentialTemplate

**Request:** 

<pre>
{
    "data": {
        "claimId": string
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

<a name="verus-list-credential-templates"></a>

### Verus list credential templates

**Method:** websocket

**Endpoint:** verus:listCredentialTemplates

**Request:** 

<pre>
{
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "credentialTemplates": [{
            "userId": string
            "attestationType": string <span color="#1b1ef7"> // attestation/credential/credentialTemplate</span>
            "networkId": string <span color="#1b1ef7"> // only for credentials</span>
            "claimType": string <span color="#1b1ef7"> // statement/socialAccount/skill/workExperience/education/achievement/block</span>
            "referenceId": string <span color="#1b1ef7"> // blockchain reference id (64 length hexadecimal string)</span>
            "formReference": string <span color="#1b1ef7"> // form reference to filter the claim-blocks</span>
            "customData": { json data } <span color="#1b1ef7"> // in case if claim has additional data</span>
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-grant-credential"></a>

### Verus grant credential

**Method:** websocket

**Endpoint:** verus:grantCredential

**Request:** 

<pre>
{
    "data": {
        "claimId": string <span color="#1b1ef7"> // id of the credential template</span>
        "userIds": [ string ] <span color="#1b1ef7"> // user ids of the recipients of the credential from the template</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "credentials": [{
            "userId": string
            "attestationType": string <span color="#1b1ef7"> // attestation/credential/credentialTemplate</span>
            "networkId": string <span color="#1b1ef7"> // only for credentials</span>
            "claimType": string <span color="#1b1ef7"> // statement/socialAccount/skill/workExperience/education/achievement/block</span>
            "referenceId": string <span color="#1b1ef7"> // blockchain reference id (64 length hexadecimal string)</span>
            "formReference": string <span color="#1b1ef7"> // form reference to filter the claim-blocks</span>
            "customData": { json data } <span color="#1b1ef7"> // in case if claim has additional data</span>
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-credentials"></a>

### Verus list credentials

**Method:** websocket

**Endpoint:** verus:listCredentials

**Request:** 

<pre>
{
    "data": {
        "cursorClaimId": string
        "limit": int
        "status": string <span color="#1b1ef7"> // optional status of a claim</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "credentials": [{
            "claim": {
                "userId": string
                "attestationType": string <span color="#1b1ef7"> // attestation/credential/credentialTemplate</span>
                "networkId": string <span color="#1b1ef7"> // only for credentials</span>
                "claimType": string <span color="#1b1ef7"> // statement/socialAccount/skill/workExperience/education/achievement/block</span>
                "referenceId": string <span color="#1b1ef7"> // blockchain reference id (64 length hexadecimal string)</span>
                "formReference": string <span color="#1b1ef7"> // form reference to filter the claim-blocks</span>
                "customData": { json data } <span color="#1b1ef7"> // in case if claim has additional data</span>
                "claimId": string
                "claimMessage": string
                "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
                "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
                "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
                "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
                "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            }
            "endorsements": [{
                "claimId": string
                "claimAttestationType": string
                "claimType": string
                "claimUserId": string
                "userId": string <span color="#1b1ef7"> // endorser user id</span>
                "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
                "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
                "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
                "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
                "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
                "added": timestamp <span color="#1b1ef7"> // timestamp when endorsement has been added to database, not actual time of creation (used for ordering)</span>
                "blockchainData": { json data } <span color="#1b1ef7"> // blockchain endorsement model as JSON</span>
            }]
        }]
        "hasMore": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-revoke-credential"></a>

### Verus revoke credential

**Method:** websocket

**Endpoint:** verus:revokeCredential

**Request:** 

<pre>
{
    "data": {
        "claimId": string
        "userId": string <span color="#1b1ef7"> // only available for admins</span>
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

<a name="verus-synchronize-claims-and-endorsements"></a>

### Verus synchronize claims and endorsements

**Method:** websocket

**Endpoint:** verus:synchronizeClaimsAndEndorsements

**Description:** Endpoint synchronizes claims and endorsements with Verus blockchain.

**Request:** 

<pre>
{ empty }
</pre>

**Response:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-for-attestation-proofs-from-wallet"></a>

### Verus get deeplink for attestation proofs from wallet

**Method:** websocket

**Endpoint:** verus:getDeeplinkForAttestationProofsFromWallet

**Description:** Endpoint returns deeplink to user in order to retrieve attestation proofs using Verus.

**Request:** 

<pre>
{
    "data": {
        "signer": string <span color="#1b1ef7"> // optional, ValuID iAddress is used by default</span>
        "requestedKeys": [ string ] <span color="#1b1ef7"> // VDXF keys (or suffix that will be used to fetch keys)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-for-attestation-values-from-wallet"></a>

### Verus get deeplink for attestation values from wallet

**Method:** websocket

**Endpoint:** verus:getDeeplinkForAttestationValuesFromWallet

**Description:** Endpoint returns deeplink to user in order to retrieve attestation values (by requested keys) using Verus. Result attestation values could be used in order to autofill attestation block form.

**Request:** 

<pre>
{
    "data": {
        "signer": string <span color="#1b1ef7"> // optional, ValuID iAddress is used by default</span>
        "requestedKeys": [ string ] <span color="#1b1ef7"> // VDXF keys (or suffix that will be used to fetch keys)</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-for-attestation"></a>

### Verus get deeplink for attestation

**Method:** websocket

**Endpoint:** verus:getDeeplinkForAttestation

**<span color="red">DEPRECATED</span>** 

**Description:** Endpoint returns deeplink to user in order to retrieve attestation using Verus.

**Request:** 

<pre>
{
    "data": {
        "permissionsSet": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-deeplink-for-attestation-proofs"></a>

### Verus get deeplink for attestation proofs

**Method:** websocket

**Endpoint:** verus:getDeeplinkForAttestationProofs

**<span color="red">DEPRECATED</span>** 

**Description:** Endpoint returns deeplink to user in order to retrieve attestation using Verus.

**Request:** 

<pre>
{
    "data": {
        "permissionsSet": [ string ]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-user-attestation"></a>

### Verus get user attestation

**Method:** websocket

**Endpoint:** verus:getUserAttestation

**Description:** Endpoint returns user attestation from database.

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "userId": string
        "attestation": map[sectionName]{ attestation JSON }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-attestation-block"></a>

### Verus create attestation block

**Method:** websocket

**Endpoint:** verus:createAttestationBlock

**Request:** 

<pre>
{
    "data": {
        "blockSchema": map[string]{ custom structure }
        "blockTitle": string
        "blockType": string <span color="#1b1ef7"> // attestation/credential</span>
        "usageType": string <span color="#1b1ef7"> // single/multiple</span>
        "formReference": string
        "approveOptions": [ string ]
        "requiredAttestations": [ string ]
        "blockQuestions": [{
            "isRequired": bool
            "fieldReference": string
            "questionTitle": string
            "questionType": string
            "questionMessage": string
            "multipleChoice": [{
                "answerMessage": string
                "needUpload": bool
            }]
        }]
        "isGlobal": bool <span color="#1b1ef7"> // if true, block will be available for all networks</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "block": {
            "networkId": string <span color="#1b1ef7"> // network where this custom attestation block should be shown</span>
            "isGlobal": bool <span color="#1b1ef7"> // if true, block will be available for all networks</span>
            "blockId": string
            "blockStatus": string <span color="#1b1ef7"> // draft/published</span>
            "blockType": string <span color="#1b1ef7"> // attestation/credential</span>
            "usageType": string <span color="#1b1ef7"> // single/multiple</span>
            "blockTitle": string
            "formReference": string
            "blockSchema": map[string]{ custom structure } <span color="#1b1ef7"> // client side visual information about the form</span>
            "blockQuestions": [{
                "questionId": string
                "isRequired": bool
                "fieldReference": string
                "questionTitle": string
                "questionType": string
                "questionMessage": string
                "multipleChoice": [{
                    "answerMessage": string
                    "needUpload": bool
                }]
            }]
            "approveOptions": [ string ]
            "requiredAttestations": [ string ]
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-delete-attestation-block"></a>

### Verus delete attestation block

**Method:** websocket

**Endpoint:** verus:deleteAttestationBlock

**Request:** 

<pre>
{
    "data": {
        "blockId": string
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

<a name="verus-update-attestation-block"></a>

### Verus update attestation block

**Method:** websocket

**Endpoint:** verus:updateAttestationBlock

**Request:** 

<pre>
{
    "data": {
        "blockSchema": map[string]{ custom structure }
        "blockId": string
        "blockTitle": string
        "formReference": string
        "approveOptions": [ string ]
        "requiredAttestations": [ string ]
        "blockQuestions": [{
            "isRequired": bool
            "fieldReference": string
            "questionTitle": string
            "questionType": string
            "questionMessage": string
            "multipleChoice": [{
                "answerMessage": string
                "needUpload": bool
            }]
        }]
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

<a name="verus-publish-attestation-block"></a>

### Verus publish attestation block

**Method:** websocket

**Endpoint:** verus:publishAttestationBlock

**Request:** 

<pre>
{
    "data": {
        "blockId": string
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

<a name="verus-list-attestation-blocks"></a>

### Verus list attestation blocks

**Method:** websocket

**Endpoint:** verus:listAttestationBlocks

**Request:** 

<pre>
{
    "data": {
        "blockType": string <span color="#1b1ef7"> // attestation/credential</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "blocks": [{ <span color="#1b1ef7"> // network specific attestation blocks</span>
            "networkId": string <span color="#1b1ef7"> // network where this custom attestation block should be shown</span>
            "isGlobal": bool <span color="#1b1ef7"> // if true, block will be available for all networks</span>
            "blockId": string
            "blockStatus": string <span color="#1b1ef7"> // draft/published</span>
            "blockType": string <span color="#1b1ef7"> // attestation/credential</span>
            "usageType": string <span color="#1b1ef7"> // single/multiple</span>
            "blockTitle": string
            "formReference": string
            "blockSchema": map[string]{ custom structure } <span color="#1b1ef7"> // client side visual information about the form</span>
            "blockQuestions": [{
                "questionId": string
                "isRequired": bool
                "fieldReference": string
                "questionTitle": string
                "questionType": string
                "questionMessage": string
                "multipleChoice": [{
                    "answerMessage": string
                    "needUpload": bool
                }]
            }]
            "approveOptions": [ string ]
            "requiredAttestations": [ string ]
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-attestation-blocks-for-user"></a>

### Verus get attestation blocks for user

**Method:** websocket

**Endpoint:** verus:getAttestationBlocksForUser

**<span color="red">DEPRECATED</span>** 

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "attestationType": string <span color="#1b1ef7"> // optional, attestation/credential/credentialTemplate</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "blocks": [{ <span color="#1b1ef7"> // network specific attestation blocks</span>
            "networkId": string <span color="#1b1ef7"> // network where this custom attestation block should be shown</span>
            "isGlobal": bool <span color="#1b1ef7"> // if true, block will be available for all networks</span>
            "blockId": string
            "blockStatus": string <span color="#1b1ef7"> // draft/published</span>
            "blockType": string <span color="#1b1ef7"> // attestation/credential</span>
            "usageType": string <span color="#1b1ef7"> // single/multiple</span>
            "blockTitle": string
            "formReference": string
            "blockSchema": map[string]{ custom structure } <span color="#1b1ef7"> // client side visual information about the form</span>
            "blockQuestions": [{
                "questionId": string
                "isRequired": bool
                "fieldReference": string
                "questionTitle": string
                "questionType": string
                "questionMessage": string
                "multipleChoice": [{
                    "answerMessage": string
                    "needUpload": bool
                }]
            }]
            "approveOptions": [ string ]
            "requiredAttestations": [ string ]
        }]
        "claims": map[blockId]{ attestation claim } <span color="#1b1ef7"> // user claims (answers) per blockId per questionId</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-attestation-blocks-for-user"></a>

### Verus list attestation blocks for user

**Method:** websocket

**Endpoint:** verus:listAttestationBlocksForUser

**Request:** 

<pre>
{
    "data": {
        "targetUser": string
        "attestationType": string <span color="#1b1ef7"> // optional, attestation/credential/credentialTemplate</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "blocks": [{ <span color="#1b1ef7"> // network specific attestation blocks</span>
            "networkId": string <span color="#1b1ef7"> // network where this custom attestation block should be shown</span>
            "isGlobal": bool <span color="#1b1ef7"> // if true, block will be available for all networks</span>
            "blockId": string
            "blockStatus": string <span color="#1b1ef7"> // draft/published</span>
            "blockType": string <span color="#1b1ef7"> // attestation/credential</span>
            "usageType": string <span color="#1b1ef7"> // single/multiple</span>
            "blockTitle": string
            "formReference": string
            "blockSchema": map[string]{ custom structure } <span color="#1b1ef7"> // client side visual information about the form</span>
            "blockQuestions": [{
                "questionId": string
                "isRequired": bool
                "fieldReference": string
                "questionTitle": string
                "questionType": string
                "questionMessage": string
                "multipleChoice": [{
                    "answerMessage": string
                    "needUpload": bool
                }]
            }]
            "approveOptions": [ string ]
            "requiredAttestations": [ string ]
        }]
        "claims": [{ <span color="#1b1ef7"> // user claims (answers) for blocks</span>
            "attestationType": string
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "blockId": string
            "blockTitle": string
            "formReference": string
            "networkId": string
            "blockAnswers": [{
                "networkId": string
                "blockId": string
                "questionId": string
                "questionTitle": string
                "questionMessage": string
                "answerMessage": string
                "fieldReference": string
            }]
            "blockSchema": map[string]{ custom structure }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-set-answers-for-attestation-block"></a>

### Verus set answers for attestation block

**Method:** websocket

**Endpoint:** verus:setAnswersForAttestationBlock

**Description:** Deprecated, sets answers in old way: one claim (claimType: 'attestationBlock') per answer. Use setAnswersForBlock.

**Request:** 

<pre>
{
    "data": {
        "blockId": string
        "blockAnswers": map[string]string <span color="#1b1ef7"> // map[questionId]answerString</span>
        "claimId": string <span color="#1b1ef7"> // in case of updating existing claim</span>
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

<a name="verus-set-answers-for-block"></a>

### Verus set answers for block

**Method:** websocket

**Endpoint:** verus:setAnswersForBlock

**Description:** creates a claim with answers (claimType: 'block') for the whole attestation block.

**Request:** 

<pre>
{
    "data": {
        "blockId": string
        "blockAnswers": map[string]string <span color="#1b1ef7"> // map[questionId]answerString</span>
        "claimId": string <span color="#1b1ef7"> // in case of updating existing claim</span>
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

<a name="verus-get-block-vdxf-keys-by-suffix"></a>

### Verus get block vDXF keys by suffix

**Method:** websocket

**Endpoint:** verus:getBlockVDXFKeysBySuffix

**Description:** Endpoint returns available VDXF keys from network attestation blocks by provided suffix.

**Request:** 

<pre>
{
    "data": {
        "suffix": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "keys": [ string ]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-currency-identity"></a>

### Verus create currency identity

**Method:** websocket

**Endpoint:** verus:createCurrencyIdentity

**Request:** 

<pre>
{
    "data": {
        "identityName": string <span color="#1b1ef7"> // Name of the namespace and associated currency</span>
        "fees": float <span color="#1b1ef7"> // Cost to mint the NFT identity</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-check-currency-identity-name"></a>

### Verus check currency identity name

**Method:** websocket

**Endpoint:** verus:checkCurrencyIdentityName

**Request:** 

<pre>
{
    "data": {
        "identityName": string <span color="#1b1ef7"> // Identity name within the namespace (currency) to check for availability</span>
        "currency": string <span color="#1b1ef7"> // Namespace (currency) to check for identity name availability</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "status": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-change-currency-owner"></a>

### Verus change currency owner

**Method:** websocket

**Endpoint:** verus:changeCurrencyOwner

**Request:** 

<pre>
{
    "data": {
        "curr": string <span color="#1b1ef7"> // Namespace (currency) whose ownership is to be changed</span>
        "toId": string <span color="#1b1ef7"> // Identity that will become the new owner</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-mint-nft-on-currency"></a>

### Verus mint nFT on currency

**Method:** websocket

**Endpoint:** verus:mintNFTOnCurrency

**Request:** 

<pre>
{
    "data": {
        "nfts": [{ <span color="#1b1ef7"> // List of NFTs to be minted</span>
            "nftName": string <span color="#1b1ef7"> // Name of the NFT</span>
            "onCurrency": string <span color="#1b1ef7"> // Namespace under which the NFT is minted</span>
            "data": map[string]{ custom structure } <span color="#1b1ef7"> // JSON object containing metadata for the NFT (e.g., name, description, price)</span>
        }]
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "nfts": [{ <span color="#1b1ef7"> // List of NFTs to be minted</span>
            "challengeId": string <span color="#1b1ef7"> // ID related to the challenge or minting process</span>
            "nft": { <span color="#1b1ef7"> // NFT to be minted</span>
                "nftName": string <span color="#1b1ef7"> // Name of the NFT</span>
                "onCurrency": string <span color="#1b1ef7"> // Namespace under which the NFT is minted</span>
                "data": map[string]{ custom structure } <span color="#1b1ef7"> // JSON object containing metadata for the NFT (e.g., name, description, price)</span>
            }
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-list-identities-from-wallet-on-currency"></a>

### Verus list identities from wallet on currency

**Method:** websocket

**Endpoint:** verus:listIdentitiesFromWalletOnCurrency

**Request:** 

<pre>
{
    "data": {
        "identity": string
        "currency": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "identitiesList": [{
            "identity": string
            "identityaddress": string
            "metadata": string
            "parent": string
        }]
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-all-identities-in-wallet-on-currency"></a>

### Verus get all identities in wallet on currency

**Method:** websocket

**Endpoint:** verus:getAllIdentitiesInWalletOnCurrency

**Request:** 

<pre>
{
    "data": {
        "identity": string
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-provision-deeplink"></a>

### Verus get provision deeplink

**Method:** websocket

**Endpoint:** verus:getProvisionDeeplink

**Description:** Endpoint returns deeplink that should be used for Verus provision process. After Verus provision is finished, server links new Verus account to user and sends ```auth:verusLinkSuccess``` or ```auth:verusLinkError``` event.

**Request:** 

<pre>
{
    "data": {
        "redirectUrl": string
        "isMobile": bool
        "publicKey": string <span color="#1b1ef7"> // public key to securely fetch scoped root key from Verus wallet using RSA encryption</span>
        "zAddress": string <span color="#1b1ef7"> // zAddress to securely fetch scoped root key from Verus wallet using zAddess encryption</span>
        "encVersion": string <span color="#1b1ef7"> // encryption version, like 'verus.v0'</span>
        "identityName": string <span color="#1b1ef7"> // example.RoomID@</span>
    }
    "event": { "id": string, "date": timestamp }
}
</pre>

**Response:** 

<pre>
{
    "data": {
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-statement-claim-created-event-deprecated"></a>

### On attestation statement claim created event: deprecated

**Event:** verus:verifiableStatementCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-statement-claim-created-event"></a>

### On attestation statement claim created event

**Event:** verus:statementClaimCreated

**Description:** Event is triggered when new statement claim is created for user.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-social-account-claim-created-event-deprecated"></a>

### On attestation social account claim created event: deprecated

**Event:** verus:verifiableSocialAccountCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
        "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
        "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
        "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-social-account-claim-created-event"></a>

### On attestation social account claim created event

**Event:** verus:socialAccountClaimCreated

**Description:** Event is triggered when new social account claim is created for user.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
        "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
        "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
        "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-skill-claim-created-event-deprecated"></a>

### On attestation skill claim created event: deprecated

**Event:** verus:verifiableSkillCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "category": string
        "skillTag": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-skill-claim-created-event"></a>

### On attestation skill claim created event

**Event:** verus:skillClaimCreated

**Description:** Event is triggered when new skill claim is created for user.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "category": string
        "skillTag": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-work-experience-claim-created-event-deprecated"></a>

### On attestation work experience claim created event: deprecated

**Event:** verus:verifiableWorkExperienceCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-work-experience-claim-created-event"></a>

### On attestation work experience claim created event

**Event:** verus:workExperienceClaimCreated

**Description:** Event is triggered when new work experience claim is created for user.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-education-claim-created-event-deprecated"></a>

### On attestation education claim created event: deprecated

**Event:** verus:verifiableEducationCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-education-claim-created-event"></a>

### On attestation education claim created event

**Event:** verus:educationClaimCreated

**Description:** Event is triggered when new education claim is created for user.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-achievement-claim-created-event"></a>

### On attestation achievement claim created event

**Event:** verus:achievementClaimCreated

**Description:** Event is triggered when new achievement claim is created for user.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-block-claim-created-event"></a>

### On attestation block claim created event

**Event:** verus:attestationBlockClaimCreated

**Description:** Event is triggered when new claims are created for a block-claim.

**Data:** 

<pre>
{
    "data": {
        "attestationType": string
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "blockId": string
        "blockTitle": string
        "formReference": string
        "networkId": string
        "blockAnswers": [{
            "networkId": string
            "blockId": string
            "questionId": string
            "questionTitle": string
            "questionMessage": string
            "answerMessage": string
            "fieldReference": string
        }]
        "blockSchema": map[string]{ custom structure }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-block-claims-created-event"></a>

### On attestation block claims created event

**Event:** verus:attestationBlockClaimsCreated

**Description:** Event is triggered when new claims are created for attestation block.

**Data:** 

<pre>
{
    "data": {
        "claims": map[blockId]{ attestation claim } <span color="#1b1ef7"> // user claims (answers) per blockId per questionId</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-statement-claim-deleted-event-deprecated"></a>

### On attestation statement claim deleted event: deprecated

**Event:** verus:verifiableStatementDeleted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-statement-claim-deleted-event"></a>

### On attestation statement claim deleted event

**Event:** verus:statementClaimDeleted

**Description:** Event is triggered when statement claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-social-account-claim-deleted-event-deprecated"></a>

### On attestation social account claim deleted event deprecated

**Event:** verus:verifiableSocialAccountDeleted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-social-account-claim-deleted-event"></a>

### On attestation social account claim deleted event

**Event:** verus:socialAccountClaimDeleted

**Description:** Event is triggered when social account claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-skill-claim-deleted-event-deprecated"></a>

### On attestation skill claim deleted event: deprecated

**Event:** verus:verifiableSkillDeleted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-skill-claim-deleted-event"></a>

### On attestation skill claim deleted event

**Event:** verus:skillClaimDeleted

**Description:** Event is triggered when skill claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-work-experience-claim-deleted-event-deprecated"></a>

### On attestation work experience claim deleted event: deprecated

**Event:** verus:verifiableWorkExperienceDeleted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-work-experience-claim-deleted-event"></a>

### On attestation work experience claim deleted event

**Event:** verus:workExperienceClaimDeleted

**Description:** Event is triggered when work experience claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-education-claim-deleted-event-deprecated"></a>

### On attestation education claim deleted event: deprecated

**Event:** verus:verifiableEducationDeleted

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-education-claim-deleted-event"></a>

### On attestation education claim deleted event

**Event:** verus:educationClaimDeleted

**Description:** Event is triggered when education claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-achievement-claim-deleted-event"></a>

### On attestation achievement claim deleted event

**Event:** verus:achievementClaimDeleted

**Description:** Event is triggered when achievement claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-block-claim-deleted-event"></a>

### On attestation block claim deleted event

**Event:** verus:attestationBlockClaimDeleted

**Description:** Event is triggered when attestation block claim is deleted.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-statement-claim-updated-event-deprecated"></a>

### On attestation statement claim updated event: deprecated

**Event:** verus:verifiableStatementUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-statement-claim-updated-event"></a>

### On attestation statement claim updated event

**Event:** verus:statementClaimUpdated

**Description:** Event is triggered when statement claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-social-account-claim-updated-event-deprecated"></a>

### On attestation social account claim updated event: deprecated

**Event:** verus:verifiableSocialAccountUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
        "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
        "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
        "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-social-account-claim-updated-event"></a>

### On attestation social account claim updated event

**Event:** verus:socialAccountClaimUpdated

**Description:** Event is triggered when social account claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
        "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
        "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
        "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-skill-claim-updated-event-deprecated"></a>

### On attestation skill claim updated event: deprecated

**Event:** verus:verifiableSkillUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "category": string
        "skillTag": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-skill-claim-updated-event"></a>

### On attestation skill claim updated event

**Event:** verus:skillClaimUpdated

**Description:** Event is triggered when skill claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "category": string
        "skillTag": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-work-experience-claim-updated-event-deprecated"></a>

### On attestation work experience claim updated event: deprecated

**Event:** verus:verifiableWorkExperienceUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-work-experience-claim-updated-event"></a>

### On attestation work experience claim updated event

**Event:** verus:workExperienceClaimUpdated

**Description:** Event is triggered when work experience claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "companyName": string
        "position": string
        "location": string
        "description": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-education-claim-updated-event-deprecated"></a>

### On attestation education claim updated event: deprecated

**Event:** verus:verifiableEducationUpdated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "message": string
        "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-education-claim-updated-event"></a>

### On attestation education claim updated event

**Event:** verus:educationClaimUpdated

**Description:** Event is triggered when education claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "school": string
        "degree": string
        "fieldOfStudy": string
        "startDate": timestamp
        "endDate": timestamp
        "isContinuing": bool
        "educationStatus": string <span color="#1b1ef7"> // incomplete,enrolled,completed</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-achievement-claim-updated-event"></a>

### On attestation achievement claim updated event

**Event:** verus:achievementClaimUpdated

**Description:** Event is triggered when achievement claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-attestation-block-claim-updated-event"></a>

### On attestation block claim updated event

**Event:** verus:blockClaimUpdated

**Description:** Event is triggered when achievement claim is updated.

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "claimMessage": string
        "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
        "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
        "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
        "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
        "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
        "title": string
        "organization": string
        "issueDate": timestamp
        "expirationDate": timestamp
        "credentialsId": string
        "credentialsUrl": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verify-social-account-proof-result-event-deprecated"></a>

### On verify social account proof result event: deprecated

**Event:** verus:verifySocialAccountProofResultEvent

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "message": {
            "messageId": string
            "message": string
            "status": string <span color="#1b1ef7"> // message verification status by Verus signatures (Verified / Not verified)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign the message</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign the message</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of message signatures</span>
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
        }
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verify-social-account-proof-result-event"></a>

### On verify social account proof result event

**Event:** verus:socialAccountProofResultEvent

**Description:** Event is triggered when social account proof url verification completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "claim": {
            "claimId": string
            "claimMessage": string
            "status": string <span color="#1b1ef7"> // claim verification status by Verus signatures (Not Saved / Saved / Verified / Verified And Persisted)</span>
            "verifyIdentities": [ string ] <span color="#1b1ef7"> // Verus identities that are requested to sign (approve) the claim</span>
            "verifyIAddresses": [ string ] <span color="#1b1ef7"> // Verus identity IAddresses that are requested to sign (approve) the claim</span>
            "signaturesCount": int <span color="#1b1ef7"> // total count of claim signatures</span>
            "savedSignaturesCount": int <span color="#1b1ef7"> // count of saved (to blockchain) claim signatures</span>
            "socialType": string <span color="#1b1ef7"> // x/linkedin/facebook</span>
            "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
            "socialName": string <span color="#1b1ef7"> // user first and last name in target social network</span>
            "proofMessage": string <span color="#1b1ef7"> // proof message that should be posted in target social network</span>
            "proofUrl": string <span color="#1b1ef7"> // link to post in target social network</span>
            "proofStatus": string <span color="#1b1ef7"> // Verified / In Process / Not verified</span>
        }
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-statement-claim-event-deprecated"></a>

### On new signature for attestation statement claim event: deprecated

**Event:** verus:signatureForVerifiableStatementCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "messageId": string
            "userId": string
            "verifyIdentity": string <span color="#1b1ef7"> // Verus identity name that signed the message</span>
            "verifyIAddress": string <span color="#1b1ef7"> // Verus identity IAddress that signed the message</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the message</span>
        }
        "message": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-statement-claim-event"></a>

### On new signature for attestation statement claim event

**Event:** verus:signatureForStatementClaimCreated

**Description:** Event is triggered when new signature is created for statement claim.

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }
        "claimMessage": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-skill-claim-event-deprecated"></a>

### On new signature for attestation skill claim event: deprecated

**Event:** verus:signatureForVerifiableSkillCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "messageId": string
            "userId": string
            "verifyIdentity": string <span color="#1b1ef7"> // Verus identity name that signed the message</span>
            "verifyIAddress": string <span color="#1b1ef7"> // Verus identity IAddress that signed the message</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the message</span>
        }
        "message": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-skill-claim-event"></a>

### On new signature for attestation skill claim event

**Event:** verus:signatureForSkillClaimCreated

**Description:** Event is triggered when new signature is created for skill claim.

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }
        "claimMessage": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-work-experience-claim-event-deprecated"></a>

### On new signature for attestation work experience claim event: deprecated

**Event:** verus:signatureForVerifiableWorkExperienceCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "messageId": string
            "userId": string
            "verifyIdentity": string <span color="#1b1ef7"> // Verus identity name that signed the message</span>
            "verifyIAddress": string <span color="#1b1ef7"> // Verus identity IAddress that signed the message</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the message</span>
        }
        "message": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-work-experience-claim-event"></a>

### On new signature for attestation work experience claim event

**Event:** verus:signatureForWorkExperienceClaimCreated

**Description:** Event is triggered when new signature is created for work experience claim.

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }
        "claimMessage": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-education-claim-event-deprecated"></a>

### On new signature for attestation education claim event: deprecated

**Event:** verus:signatureForVerifiableEducationCreated

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "messageId": string
            "userId": string
            "verifyIdentity": string <span color="#1b1ef7"> // Verus identity name that signed the message</span>
            "verifyIAddress": string <span color="#1b1ef7"> // Verus identity IAddress that signed the message</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the message</span>
        }
        "message": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-education-claim-event"></a>

### On new signature for attestation education claim event

**Event:** verus:signatureForEducationClaimCreated

**Description:** Event is triggered when new signature is created for education claim.

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }
        "claimMessage": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-achievement-claim-event"></a>

### On new signature for attestation achievement claim event

**Event:** verus:signatureForAchievementClaimCreated

**Description:** Event is triggered when new signature is created for achievement claim.

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }
        "claimMessage": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-new-signature-for-attestation-block-claim-event"></a>

### On new signature for attestation block claim event

**Event:** verus:signatureForBlockClaimCreated

**Description:** Event is triggered when new signature is created for achievement claim.

**Data:** 

<pre>
{
    "data": {
        "signature": {
            "claimId": string
            "claimAttestationType": string
            "claimType": string
            "claimUserId": string
            "userId": string <span color="#1b1ef7"> // endorser user id</span>
            "verifyIdentity": string <span color="#1b1ef7"> // endorser Verus identity name</span>
            "verifyIAddress": string <span color="#1b1ef7"> // endorser Verus identity IAddress</span>
            "message": string <span color="#1b1ef7"> // endorsement message by endorser</span>
            "signature": string <span color="#1b1ef7"> // Verus generated signature to verify the claim</span>
            "status": string <span color="#1b1ef7"> // endorsement status (Saved/Not Saved/Signed/Revoked)</span>
        }
        "claimMessage": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-sign-disclaimer-success-event"></a>

### Verus sign disclaimer success event

**Event:** verus:signDisclaimerSuccess

**Description:** Event is emitted after Verus sign disclaimer have been completed and crypto server verifies challengeId.

**Data:** 

<pre>
{
    "data": {
        "signature": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-sign-disclaimer-error-event"></a>

### Verus sign disclaimer error event

**Event:** verus:signDisclaimerError

**Description:** Event is emitted in case if Verus sign disclaimer fails or challengeId verification fails.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-purchase-content-success-event"></a>

### Verus purchase content success event

**Event:** verus:purchaseContentSuccess

**Description:** Event is emitted after Verus purchase content have been completed and crypto server verifies challengeId.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-purchase-content-error-event"></a>

### Verus purchase content error event

**Event:** verus:purchaseContentError

**Description:** Event is emitted in case if Verus purchase content fails or challengeId verification fails.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-album-created-event"></a>

### Verus album created event

**Event:** verus:albumCreated

**Description:** Event is emitted when album is created.

**Data:** 

<pre>
{
    "data": {
        "contentIdentity": string
        "contentData": {
            "artistName": string <span color="#1b1ef7"> // artist name</span>
            "albumName": string <span color="#1b1ef7"> // album name</span>
            "genre": string <span color="#1b1ef7"> // album genre</span>
            "url": string <span color="#1b1ef7"> // url to album within valuverse application (set by server)</span>
            "networkId": string <span color="#1b1ef7"> // metaverse network id (set by server)</span>
            "signature": string <span color="#1b1ef7"> // disclaimer signed by verus account, HASH string</span>
            "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
            "tracks": [{
                "resourceId": string
                "name": string
                "duration": float
            }]
            "albumCover": {
                "resourceId": string
            }
            "artistLogo": {
                "resourceId": string
            }
            "sleeveDocument": { <span color="#1b1ef7"> // table of contents, notes, lyrics</span>
                "resourceId": string
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-album-create-error-event"></a>

### Verus album create error event

**Event:** verus:albumCreateError

**Description:** Event is emitted when album create is failed.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-album-purchased-event"></a>

### Verus album purchased event

**Event:** verus:albumPurchased

**Description:** Event is emitted when album is purchased.

**Data:** 

<pre>
{
    "data": {
        "contentSubIdentities": [ string ]
        "contentData": {
            "artistName": string <span color="#1b1ef7"> // artist name</span>
            "albumName": string <span color="#1b1ef7"> // album name</span>
            "genre": string <span color="#1b1ef7"> // album genre</span>
            "url": string <span color="#1b1ef7"> // url to album within valuverse application (set by server)</span>
            "networkId": string <span color="#1b1ef7"> // metaverse network id (set by server)</span>
            "signature": string <span color="#1b1ef7"> // disclaimer signed by verus account, HASH string</span>
            "price": map[string]float <span color="#1b1ef7"> // album price per crypto currency</span>
            "tracks": [{
                "resourceId": string
                "name": string
                "duration": float
            }]
            "albumCover": {
                "resourceId": string
            }
            "artistLogo": {
                "resourceId": string
            }
            "sleeveDocument": { <span color="#1b1ef7"> // table of contents, notes, lyrics</span>
                "resourceId": string
            }
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-album-purchase-error-event"></a>

### Verus album purchase error event

**Event:** verus:albumPurchaseError

**Description:** Event is emitted when album purchase is failed.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="create-room-subscription-with-verus"></a>

### Create room subscription with Verus

**Event:** verus:createRoomSubscription

**Description:** Event provides deeplink that should be used for Verus payment. After Verus payment is finished, server sends ```verus:createRoomSubscriptionSuccess``` or ```verus:createRoomSubscriptionError``` event.

**Data:** 

<pre>
{
    "data": {
        "roomId": string
        "challengeId": string
        "deepLink": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-room-subscription-success-event"></a>

### Verus create room subscription success event

**Event:** verus:createRoomSubscriptionSuccess

**Description:** Event is emitted after Verus payment have been completed and crypto server verifies challengeId.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-room-subscription-error-event"></a>

### Verus create room subscription error event

**Event:** verus:createRoomSubscriptionError

**Description:** Event is emitted in case if Verus payment fails or challengeId verification fails.

**Data:** 

<pre>
{
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-transaction-status-updated-event"></a>

### Verus transaction status updated event

**Event:** verus:transactionStatusUpdated

**Description:** Event is emitted when Verus transaction status updated.

**Data:** 

<pre>
{
    "data": {
        "userId": string
        "transactionId": string
        "blockchainTransactionId": string
        "status": {
            "name": string
            "status": bool
            "error": string
            "timestamp": timestamp
        }
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-link-persona-account-result-event"></a>

### Verus link persona account result event

**Event:** verus:linkPersonaAccountResultEvent

**Description:** Event is emitted after Verus persona account linking have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "linkedAccount": {
            "id": string
            "firstName": string
            "lastName": string
            "privacyMode": int <span color="#1b1ef7"> // 0 - Default, 1 - Incognito</span>
            "avatar": string
            "avatar3D": { <span color="#1b1ef7"> // field is not returned if empty</span>
                "assetId": string
                "assetSkins": map[string]string <span color="#1b1ef7"> // map of selected skins per variants</span>
                "avatarUrl": string <span color="#1b1ef7"> // url to gbl file (Ready Player Me)</span>
                "avatarUserId": string <span color="#1b1ef7"> // user id for session recovery (Ready Player Me)</span>
            }
            "companyName": string <span color="#1b1ef7"> // name of company that user represents</span>
            "companyTitle": string <span color="#1b1ef7"> // user title in the company</span>
            "identityType": int <span color="#1b1ef7"> // 0 - Not Assigned, 1 - SSID, 2 - VSSID</span>
            "identityName": string <span color="#1b1ef7"> // Verus identity name</span>
        }
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-scoped-root-key-result-event"></a>

### Verus get scoped root key result event

**Event:** verus:getScopedRootKeyResultEvent

**Description:** Event is emitted after Verus get scoped root key process have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "cypherData": string <span color="#1b1ef7"> // data from wallet encrypted for client public key or zAddress</span>
        "epk": string <span color="#1b1ef7"> // encryption epk, if used cypherData</span>
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verus-verify-message-result-event-deprecated"></a>

### On verus verify message result event: deprecated

**Event:** verus:verifyMessageResultEvent

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-verify-attestation-claim-result-event"></a>

### Verus verify attestation claim result event

**Event:** verus:verifyAttestationClaimResultEvent

**Description:** Event is emitted after Verus attestation claim verification have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verus-verify-social-account-result-event-deprecated"></a>

### On verus verify social account result event: deprecated

**Event:** verus:verifySocialAccountResultEvent

**<span color="red">DEPRECATED</span>** 

**Data:** 

<pre>
{
    "data": {
        "messageId": string
        "proofMessage": string <span color="#1b1ef7"> // message to post in social network</span>
        "socialType": string <span color="#1b1ef7"> // x/linkedin</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "signature": string
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-verify-social-account-result-event"></a>

### Verus verify social account result event

**Event:** verus:verifySocialAccountClaimResultEvent

**Description:** Event is emitted after Verus social account message verification have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "proofMessage": string <span color="#1b1ef7"> // message to post in social network</span>
        "socialType": string <span color="#1b1ef7"> // x/linkedin</span>
        "socialUsername": string <span color="#1b1ef7"> // username in target social network</span>
        "signature": string
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-save-claims-result-event"></a>

### Verus save claims result event

**Event:** verus:saveClaimsResultEvent

**Description:** Event is emitted after Verus save claims have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "claimIds": [ string ]
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-create-endorsement-result-event"></a>

### Verus create endorsement result event

**Event:** verus:createEndorsementResultEvent

**Description:** Event is emitted after Verus create endorsement challenge have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "claimId": string
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-save-endorsement-result-event"></a>

### Verus save endorsement result event

**Event:** verus:saveEndorsementResultEvent

**Description:** Event is emitted after endorsement have been saved to blockchain (or failed).

**Data:** 

<pre>
{
    "data": {
        "endorsementMap": map[string][ string ]
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-attestation-result-event"></a>

### Verus get attestation result event

**Event:** verus:getAttestationResultEvent

**Description:** Event is emitted after Verus attestation retrieval have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "attestation": map[sectionName]{ attestation JSON }
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-attestation-proofs-result-event"></a>

### Verus get attestation proofs result event

**Event:** verus:getAttestationProofsResultEvent

**Description:** Event is emitted after Verus attestation proofs retrieval have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "attestation": map[sectionName]{ attestation JSON }
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="verus-get-attestation-values-result-event"></a>

### Verus get attestation values result event

**Event:** verus:getAttestationValuesResultEvent

**Description:** Event is emitted after Verus attestation values (by requested keys) retrieval have been completed (or failed).

**Data:** 

<pre>
{
    "data": {
        "attestationValues": map[string]{ custom structure }
        "isSuccess": bool
        "errorCode": int
        "errorString": string
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verus-transfer-identity-event"></a>

### On verus transfer identity event

**Event:** verus:transferIdentityEvent

**Data:** 

<pre>
{
    "data": {
        "error": string <span color="#1b1ef7"> // Error message if any occurred during the transfer</span>
        "objectId": string <span color="#1b1ef7"> // Identifier of the object (namespace/currency)</span>
        "toId": string <span color="#1b1ef7"> // Identity that became the new owner</span>
        "challengeId": string <span color="#1b1ef7"> // Challenge ID for the transfer</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verus-nft-minted-event"></a>

### On verus nft minted event

**Event:** verus:nftMintedEvent

**Data:** 

<pre>
{
    "data": {
        "error": string <span color="#1b1ef7"> // Error message if any</span>
        "identityName": string <span color="#1b1ef7"> // Name of the minted NFT identity</span>
        "challengeId": string <span color="#1b1ef7"> // ID related to the challenge or minting process</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verus-payment-ready-event"></a>

### On verus payment ready event

**Event:** verus:paymentReadyEvent

**Data:** 

<pre>
{
    "data": {
        "error": string <span color="#1b1ef7"> // Error message if any</span>
        "challengeId": string <span color="#1b1ef7"> // ID associated with the payment process</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

<br>

<a name="on-verus-currency-ready-event"></a>

### On verus currency ready event

**Event:** verus:currencyReadyEvent

**Data:** 

<pre>
{
    "data": {
        "error": string <span color="#1b1ef7"> // Error message if any</span>
        "challengeId": string <span color="#1b1ef7"> // ID related to the namespace/currency setup</span>
    }
    "error": { "status": bool, "code": int, "message": string }
}
</pre>

