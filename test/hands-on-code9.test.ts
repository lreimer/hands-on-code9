import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as HandsOnCode9 from '../lib/hands-on-code9-stack';

test('CodeCommit Repo and Cloud9 Created', () => {
   const app = new cdk.App({
       context: {
            "name": "Hands-on Cloud9",
            "instance_type": "t2.micro",
       }
   });

   const stack = new HandsOnCode9.HandsOnCode9Stack(app, 'MyTestStack', {       
   });
   const template = Template.fromStack(stack);

   template.hasResourceProperties('AWS::CodeCommit::Repository', {
    RepositoryName: 'hands-on-code9'
   });

   template.hasResourceProperties('AWS::Cloud9::EnvironmentEC2', {
    InstanceType: 't2.micro',
    AutomaticStopTimeMinutes: 60,
   });
});
