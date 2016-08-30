## Component Heirarchy

#### LogInFormContainer
- LogInForm

#### UserSignUpContainer
- SignUpTypeHeader
  - SignUpDisplay
    - UploadPictureForm
    - ItemsTagForm

#### Search
- SearchForm
  - SearchResultsDisplay

#### About

#### Profile
  - ProfileHeader
    - ProfileDisplay

#### DashboardContainer
- DashboardHeader
  - DashboardDisplay
    - Registry
    - Pledges
    - Donations
    - Index


## Routes

| Path  | Component |
|:-----:|:---------:|
| "/search" | "Search" |
| "/about" | "About" |
| "/login" | "LogInFormContainer" |
| "/signup" | "UserSignUpContainer" |
| "/home/user/:id" | "DashboardContainer" |
| "/home/user/:id/profile" | "Profile" |
