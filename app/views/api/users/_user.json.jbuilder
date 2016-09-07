json.extract! user, :id, :username, :organization_name, :email,
                    :address1, :address2, :city, :state, :zipcode,
                    :photo, :description

json.items do
  json.array! user.items
end

json.categories do
  json.array! user.categories
end
