## Schema Information

### users
| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| name | string | not null, indexed, unique |
| email | string | not null, unique |
| address1 | string | not null |
| address2 | string | not null |
| city | string | not null |
| state | string | not null |
| zipcode | integer | not null, limit: 5 |
| photo | string | not null, default: "heart.png" |
| description | text | not null |
| password_digest | string | not null, unique |
| session_token | string | not null, indexed, unique |

### item_tags

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| name | string | not null, unique |

### item_taggings

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (references users), indexed, unique(item_tag_id) |
| item_tag_id | integer | not null, foreign key (references users), indexed |

### category_tags

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| name | string | not null, unique |

### category_taggings

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (references users), indexed, unique(item_tag_id) |
| category_tag_id | integer | not null, foreign key (references users), indexed |

### pledges

| column name  | data type | details |
|:-----:|:---------:|:---------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (references users), indexed, unique(other_user_id) |
| other_user_id | integer | not null, foreign key (references users), indexed |
