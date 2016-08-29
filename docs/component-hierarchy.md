## Component Heirarchy

#### Give
- GiveSearch
- SearchResultsDisplay

#### LogInFormContainer
- LogInForm

#### UserSignUpContainer
- SignUpTypeHeader
  - SignUpDisplay

#### OrgSignUpContainer
  - SignUpTypeHeader
    - SignUpDisplay

#### Search
- SearchForm
  - SearchResultsDisplay

#### HowItWorks

#### LandingContainerUser
- UserHeader
  - UserHomeHeader
    - UserHomeDisplay

#### UserProfile

#### LandingContainerOrg
- OrgHeader
  - OrgHomeHeader
    - OrgHomeDisplay

#### OrgProfile

#### UploadPicture
- UploadFLandingContainerUserorm

#### NewItem
- NewItemForm

#### ItemsTag
- ItemsTagForm

## Routes

| Path  | Component |
|:-----:|:---------:|
| "/search" | "Give" |
| "/howitworks" | "HowItWorks" |
| "/signin" | "AuthFormContainer" |
| "/signup/user" | "UserSignUpContainer" |
| "/signup/org" | "OrgSignUpContainer" |
| "/home/user/:id" | "LandingContainerUser" |
| "/home/user/:id/profile" | "UserProfile" |
| "/home/user/:id/search" | "Search" |
| "/home/org/:id" | "LandingContainerOrg" |
| "/home/org/:id/profile" | "OrgProfile" |
| "/home/org/:id/search" | "Search" |
