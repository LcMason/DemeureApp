class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image
end
