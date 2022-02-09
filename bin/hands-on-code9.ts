#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HandsOnCode9Stack } from '../lib/hands-on-code9-stack';

const app = new cdk.App();
new HandsOnCode9Stack(app, 'HandsOnCode9Stack', {
  env: { 
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION 
  },

  /* Uncomment the next line if you know exactly what Account and Region you want to deploy the stack to. */
  // env: { account: '123456789012', region: 'eu-central-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});