class Pledge < ActiveRecord::Base
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :other_user,
    primary_key: :id,
    foreign_key: :other_user_id,
    class_name: :User

end
