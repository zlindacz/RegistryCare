json.extract! user, :id, :username, :organization_name, :email,
                    :address1, :address2, :city, :state, :zipcode,
                    :photo, :description

json.items do
  json.array! user.items
end

json.category user.category

json.pledges do
  json.array! user.pledges
end
