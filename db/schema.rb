# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161025013143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "items", force: :cascade do |t|
    t.string   "item_type",  null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pledges", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "other_user_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "user_categories", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "user_categories", ["user_id", "category_id"], name: "index_user_categories_on_user_id_and_category_id", using: :btree

  create_table "user_items", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "item_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_items", ["user_id", "item_id"], name: "index_user_items_on_user_id_and_item_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "organization_name",                                        null: false
    t.string   "username",                                                 null: false
    t.string   "email",                                                    null: false
    t.string   "address1",                                                 null: false
    t.string   "address2"
    t.string   "city",                                                     null: false
    t.string   "state",                                                    null: false
    t.string   "zipcode",           limit: 5,                              null: false
    t.string   "photo",                       default: "assets/heart.png", null: false
    t.text     "description",                                              null: false
    t.string   "password_digest",                                          null: false
    t.string   "session_token",                                            null: false
    t.datetime "created_at",                                               null: false
    t.datetime "updated_at",                                               null: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "coordinates",                 default: [],                              array: true
  end

  add_index "users", ["username", "email"], name: "index_users_on_username_and_email", unique: true, using: :btree

end
