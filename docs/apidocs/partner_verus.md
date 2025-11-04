<br>

<a name="verus-partner-api"></a>

## Verus partner API

| Endpoint | Method | Description |
|-----|-----|-----|
| [/api/v0/partnerRpc/verus.verifyChallenge](#verify-challenge) | jsonRpc | Verify challenge |
| [/api/v0/partnerRpc/verus.verifyPayment](#verify-payment) | jsonRpc | Verify payment |
| [/api/v0/partnerRpc/verus.musicCreated](#music-created) | jsonRpc | Music created |
| [/api/v0/partnerRpc/verus.musicPurchased](#music-purchased) | jsonRpc | Music purchased |
| [/api/v0/partnerRpc/verus.transactionUpdated](#transaction-updated) | jsonRpc | Transaction updated |
| [/api/v0/partnerRpc/verus.dataSigned](#data-signed) | jsonRpc | Data signed |
| [/api/v0/partnerRpc/verus.attestationFromWallet](#attestation-from-wallet) | jsonRpc | Attestation from wallet |
| ~~[/api/v0/partnerRpc/verus.attestationFetched](#attestation-fetched)~~ | jsonRpc | Attestation fetched |
| ~~[/api/v0/partnerRpc/verus.attestationProofsFetched](#attestation-proofs-fetched)~~ | jsonRpc | Attestation proofs fetched |
| [/api/v0/partnerRpc/verus.verifyEndorsementSigned](#verify-endorsement-signed) | jsonRpc | Verify endorsement signed |
| [/api/v0/partnerRpc/verus.transferIdentity](#transfer-identity) | jsonRpc | Transfer identity |
| [/api/v0/partnerRpc/verus.nftMinted](#nft-minted) | jsonRpc | Nft minted |
| [/api/v0/partnerRpc/verus.paymentReady](#payment-ready) | jsonRpc | Payment ready |
| [/api/v0/partnerRpc/verus.currencyReady](#currency-ready) | jsonRpc | Currency ready |

<br>

<a name="verify-challenge"></a>

### Verify challenge

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.verifyChallenge

**Description:** Endpoint is used by crypto server to verify user authorization with VerusId.

**Request:** 

<pre>
{
    "challengeId": string <span color="#1b1ef7"> // challenge id is unique for each challenge</span>
    "verificationStatus": bool <span color="#1b1ef7"> // true when challenge is successful</span>
    "error": string <span color="#1b1ef7"> // not empty when challenge failed</span>
    "identity": { <span color="#1b1ef7"> // client verus identity</span>
        "address": string <span color="#1b1ef7"> // Verus identity iAddress</span>
        "name": string <span color="#1b1ef7"> // Verus identity name</span>
    }
    "signature": string <span color="#1b1ef7"> // in case of sign message challenge</span>
    "attestations": map[sectionName]{ attestation JSON } <span color="#1b1ef7"> // in case of attestations challenge</span>
    "cypherData": string <span color="#1b1ef7"> // data from wallet encrypted for client public key or zAddress</span>
    "epk": string <span color="#1b1ef7"> // encryption epk, if used cypherData</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="verify-payment"></a>

### Verify payment

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.verifyPayment

**Description:** Endpoint is used by crypto server to verify user payment with VerusId.

**Request:** 

<pre>
{
    "challengeId": string <span color="#1b1ef7"> // challenge id is unique for each payment attempt</span>
    "paymentStatus": bool <span color="#1b1ef7"> // true when payment is successful</span>
    "productIdentity": string <span color="#1b1ef7"> // verus identity of purchased product</span>
    "error": string <span color="#1b1ef7"> // not empty when authorization failed</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="music-created"></a>

### Music created

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.musicCreated

**Description:** Endpoint is used by crypto server to notify user that Verus music has been created (or failed).

**Request:** 

<pre>
{
    "identity": string
    "iAddress": string
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
    "error": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="music-purchased"></a>

### Music purchased

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.musicPurchased

**Description:** Endpoint is used by crypto server to notify user that Verus music has been purchased (or failed).

**Request:** 

<pre>
{
    "challengeId": string
    "identity": string
    "iAddress": string
    "contentSubIdentities": [ string ] <span color="#1b1ef7"> // subIdentity names for each copy of content (eg. copy1.album1@)</span>
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
    "error": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="transaction-updated"></a>

### Transaction updated

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.transactionUpdated

**Description:** Endpoint is used by crypto server to notify server and user that Verus transaction has been updated.

**Request:** 

<pre>
{
    "challengeId": string
    "name": string
    "blockchainTransactionId": string
    "status": bool
    "error": string
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="data-signed"></a>

### Data signed

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.dataSigned

**Description:** Endpoint is used by crypto server to notify server and user that Verus data has been signed.

**Request:** 

<pre>
{
    "challengeId": string <span color="#1b1ef7"> // challenge id is unique for each challenge</span>
    "status": bool <span color="#1b1ef7"> // true when challenge is successful</span>
    "error": string <span color="#1b1ef7"> // not empty when challenge failed</span>
    "identityName": string <span color="#1b1ef7"> // Verus identity that signed the message</span>
    "iAddress": string <span color="#1b1ef7"> // Verus identity IAddress that signed the message</span>
    "signature": string <span color="#1b1ef7"> // Verus verification signature</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="attestation-from-wallet"></a>

### Attestation from wallet

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.attestationFromWallet

**Description:** Endpoint is used by crypto server to provide attestation data from wallet to server.

**Request:** 

<pre>
{
    "challengeId": string
    "error": string
    "iAddress": string
    "attestations": [{
        "attestationName": string
        "attestationData": map[string]{ custom structure }
    }]
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="attestation-fetched"></a>

### Attestation fetched

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.attestationFetched

**<span color="red">DEPRECATED</span>** 

**Description:** Endpoint is used by crypto server to notify server and user that Verus attestation has been fetched.

**Request:** 

<pre>
{
    "challengeId": string <span color="#1b1ef7"> // challenge id is unique for each challenge</span>
    "error": string <span color="#1b1ef7"> // not empty when challenge failed</span>
    "attestation": map[sectionName]{ attestation JSON } <span color="#1b1ef7"> // Verus attestation</span>
    "iAddress": string <span color="#1b1ef7"> // Verus attestation identity IAddress</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="attestation-proofs-fetched"></a>

### Attestation proofs fetched

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.attestationProofsFetched

**<span color="red">DEPRECATED</span>** 

**Description:** Endpoint is used by crypto server to notify server and user that Verus attestation proofs has been fetched.

**Request:** 

<pre>
{
    "challengeId": string <span color="#1b1ef7"> // challenge id is unique for each challenge</span>
    "error": string <span color="#1b1ef7"> // not empty when challenge failed</span>
    "attestationProofs": map[sectionName]{ attestation JSON } <span color="#1b1ef7"> // Verus attestation proofs</span>
    "iAddress": string <span color="#1b1ef7"> // Verus attestation identity IAddress</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="verify-endorsement-signed"></a>

### Verify endorsement signed

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.verifyEndorsementSigned

**Description:** Endpoint is used by crypto server to verify endorsement signed by Verus user.

**Request:** 

<pre>
{
    "challengeId": string <span color="#1b1ef7"> // challenge id is unique for each challenge</span>
    "error": string <span color="#1b1ef7"> // not empty when challenge failed</span>
    "endorsement": { <span color="#1b1ef7"> // endorsement blockchain model</span>
        "version": string
        "flags": string
        "endorsee": string
        "message": string
        "reference": string
        "signature": map[string]{ custom structure }
        "txid": string
    }
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="transfer-identity"></a>

### Transfer identity

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.transferIdentity

**Request:** 

<pre>
{
    "error": string <span color="#1b1ef7"> // Error message if any occurred during the transfer</span>
    "objectId": string <span color="#1b1ef7"> // Identifier of the object (namespace/currency)</span>
    "toId": string <span color="#1b1ef7"> // Identity that became the new owner</span>
    "challengeId": string <span color="#1b1ef7"> // Challenge ID for the transfer</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="nft-minted"></a>

### Nft minted

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.nftMinted

**Request:** 

<pre>
{
    "error": string <span color="#1b1ef7"> // Error message if any</span>
    "identityName": string <span color="#1b1ef7"> // Name of the minted NFT identity</span>
    "challengeId": string <span color="#1b1ef7"> // ID related to the challenge or minting process</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="payment-ready"></a>

### Payment ready

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.paymentReady

**Request:** 

<pre>
{
    "error": string <span color="#1b1ef7"> // Error message if any</span>
    "challengeId": string <span color="#1b1ef7"> // ID associated with the payment process</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

<br>

<a name="currency-ready"></a>

### Currency ready

**Method:** jsonRpc

**HTTP Method:** POST

**Path:** /api/v0/partnerRpc/verus.currencyReady

**Request:** 

<pre>
{
    "error": string <span color="#1b1ef7"> // Error message if any</span>
    "challengeId": string <span color="#1b1ef7"> // ID related to the namespace/currency setup</span>
}
</pre>

**Response:** 

<pre>
{ empty }
</pre>

