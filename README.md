# Hands-on AWS Cloud9

A demo repository to try remote development with AWS Cloud9. Also, the setup os done using AWS CDK and TypeScript.

## Useful commands

 * `npm run build`                              compile typescript to js
 * `npm run watch`                              watch for changes and compile
 * `npm run test`                               perform the jest unit tests
 * `cdk deploy`                                 deploy this stack to your default AWS account/region
 * `cdk diff`                                   compare deployed stack with current state
 * `cdk synth`                                  emits the synthesized CloudFormation template
 * `aws sts get-caller-identity`                use to get the account number if you do not know it
 * `aws configure get region`                   use to get the currently configured region
 * `cdk bootstrap aws://ACCOUNT-NUMBER/REGION`  bootstrap AWS account for CDK usage

## Maintainer

M.-Leander Reimer (@lreimer), <mario-leander.reimer@qaware.de>

## License

This software is provided under the MIT open source license, read the `LICENSE`
file for details.