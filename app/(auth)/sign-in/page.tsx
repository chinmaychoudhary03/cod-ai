import React from 'react'
import Image  from "next/image"
import type { Metadata } from 'next'
import{
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldGroup,
    FieldDescription,
    FieldSet,
} from "@/components/ui/field";
import { GithubSignInForm } from '@/features/auth/components/github-sign-in-form';

export const metadata :Metadata={
    title:"Sign in",
    description:"Sign in to CODAI With Github Account"
}
type SignInPageProps={
    searchParams:Promise<{callbackUrl?:string}>;
};
const SignInPageProps=async({searchParams}:SignInPageProps)=>{

}


const SignInPage = async ({searchParams}:SignInPageProps) => {
    const {callbackUrl}=await searchParams;
  return (
      <Card className="border-border/80 shadow-sm">
          <CardHeader className="items-center text-center">
              <div className="mb-6 flex justify-center pt-2">
                  <Image
                      src="/logo2.svg"
                      alt=" AI Code Reviewer"
                      width={172}
                      height={172}
                      priority
                      className="text-foreground"
                  />
              </div>
              <CardTitle className="text-base">Welcome</CardTitle>
              <CardDescription>
                  Sign in with GitHub to review and manage your code.
              </CardDescription>
          </CardHeader>
          <CardContent>
              <FieldSet>
                  <FieldGroup>
                      <Field>
                          <GithubSignInForm callbackUrl={callbackUrl} />
                          <FieldDescription className="text-center">
                              We only request the permissions needed to identify your
                              account. You can revoke access anytime from GitHub settings.
                          </FieldDescription>
                      </Field>
                  </FieldGroup>
              </FieldSet>
          </CardContent>
      </Card>
  )
}

export default SignInPage;