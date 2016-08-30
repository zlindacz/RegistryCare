## Schema Information

### users
| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| fname | string | not null |
| lname | string | not null |
| username | string | not null, indexed, unique |
| email | string | not null, indexed, unique |
| description | text | not null |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

### tags (item)

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| name | string | not null |

### taggings

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (references users), indexed, unique(tag id) |
| tag_id | integer | not null, foreign key (references users), indexed |

### pledges

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (references users), indexed, unique(other_user_id) |
| other_user_id | integer | not null, foreign key (references users), indexed |
