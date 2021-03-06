import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as cloud9 from 'aws-cdk-lib/aws-cloud9';

export class HandsOnCode9Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const repository = new codecommit.Repository(this, 'HandsOnCloud9Repo', {
      repositoryName: 'hands-on-code9',
    });

    const cfnEnvironmentEC2 = new cloud9.CfnEnvironmentEC2(this, 'Cloud9EnvironmentEC2', {
      instanceType: this.node.tryGetContext('instance_type'),
      automaticStopTimeMinutes: 60,
      ownerArn: this.node.tryGetContext('owner_arn'),
      connectionType: 'CONNECT_SSM',
      name: this.node.tryGetContext('name'),
    });    

  }
}
