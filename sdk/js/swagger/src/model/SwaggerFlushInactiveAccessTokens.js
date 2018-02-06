/**
 * Hydra OAuth2 & OpenID Connect Server
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### Important REST API Documentation Notes  The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)   The API documentation always refers to the latest tagged version of ORY Hydra. For previous API documentations, please refer to https://github.com/ory/hydra/blob/<tag-id>/docs/api.swagger.yaml - for example:  0.9.13: https://github.com/ory/hydra/blob/v0.9.13/docs/api.swagger.yaml 0.8.1: https://github.com/ory/hydra/blob/v0.8.1/docs/api.swagger.yaml
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FlushInactiveOAuth2TokensRequest'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./FlushInactiveOAuth2TokensRequest')
    )
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer) {
      root.HydraOAuth2OpenIdConnectServer = {}
    }
    root.HydraOAuth2OpenIdConnectServer.SwaggerFlushInactiveAccessTokens = factory(
      root.HydraOAuth2OpenIdConnectServer.ApiClient,
      root.HydraOAuth2OpenIdConnectServer.FlushInactiveOAuth2TokensRequest
    )
  }
})(this, function(ApiClient, FlushInactiveOAuth2TokensRequest) {
  'use strict'

  /**
   * The SwaggerFlushInactiveAccessTokens model module.
   * @module model/SwaggerFlushInactiveAccessTokens
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerFlushInactiveAccessTokens</code>.
   * @alias module:model/SwaggerFlushInactiveAccessTokens
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>SwaggerFlushInactiveAccessTokens</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerFlushInactiveAccessTokens} obj Optional instance to populate.
   * @return {module:model/SwaggerFlushInactiveAccessTokens} The populated <code>SwaggerFlushInactiveAccessTokens</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = FlushInactiveOAuth2TokensRequest.constructFromObject(
          data['Body']
        )
      }
    }
    return obj
  }

  /**
   * @member {module:model/FlushInactiveOAuth2TokensRequest} Body
   */
  exports.prototype['Body'] = undefined

  return exports
})