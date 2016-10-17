json.extract! user, :id, :username, :organization_name, :email,
                    :address1, :address2, :city, :state, :zipcode,
                    :photo, :description, :category

json.items do
  json.array! user.items
end

json.pledges do
  json.array! user.pledges
end
