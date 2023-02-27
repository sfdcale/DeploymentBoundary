var jsforce = require('jsforce');
require('dotenv').config();
const dependencyApi = require('./dependencies_1');

const { SFDC_INSTANCE_URL, SFDC_ACCESS_TOKEN, METADATA_ID } = process.env;

/* if (!SFDC_ACCESS_TOKEN || !SFDC_INSTANCE_URL) {
    console.error(
        'SFDC_ACCESS_TOKEN or SFDC_INSTANCE_URL is missing in .env file'
    );
}

if (!Array.isArray(METADATA_IDS) || METADATA_IDS.length == 0) {
    console.error(
        'Atleast one Id should be supplied for METADATA_IDS in .env file'
    );
} */

var conn = new jsforce.Connection({
    instanceUrl: SFDC_INSTANCE_URL,
    accessToken: SFDC_ACCESS_TOKEN
});

dependencyApi(conn, METADATA_ID).getDependencies();
/* (async () => {
    let result = await conn.tooling
        .query(`SELECT MetadataComponentId, MetadataComponentName,MetadataComponentType ,RefMetadataComponentName, RefMetadataComponentType, RefMetadataComponentId,
    RefMetadataComponentNamespace 
    FROM MetadataComponentDependency 
    WHERE MetadataComponentId IN ('${
        METADATA_IDS.split(',')[0]
    }') AND MetadataComponentType != 'FlexiPage' ORDER BY MetadataComponentName, RefMetadataComponentType`);
    console.log(result);
})();
 */
