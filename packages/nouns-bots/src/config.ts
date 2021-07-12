import dotenv from 'dotenv';

dotenv.config();

export const config = {
  redisPort: Number(process.env.REDIS_PORT ?? 6379),
  redisHost: process.env.REDIS_HOST ?? 'localhost',
  nounsSubgraph: process.env.NOUNS_SUBGRAPH_URL ?? 'https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph-rinkeby',
  twitterAppKey: process.env.TWITTER_APP_KEY ?? '',
  twitterAppSecret: process.env.TWITTER_APP_SECRET ?? '',
  twitterAccessToken: process.env.TWITTER_ACCESS_TOKEN ?? '',
  twitterAccessSecret: process.env.TWITTER_ACCESS_SECRET ?? '',
  nounsTokenAddress:
    process.env.NOUNS_TOKEN_ADDRESS ?? '0xD6e4cbd35832193b477A968307c99f74F59C9df7',
  jsonRpcUrl: process.env.JSON_RPC_URL ?? 'http://localhost:8545',
};