from ..db_connect import *

class AffiliateQueries:
    def get_all_affiliates(self):
        db = client[dbname]
        result = list(db.affiliates.find())
        for value in result:
            value["id"] = str(value["_id"])
        return {"affiliates": result}

    def find_affiliate(self, id):
        if isinstance(id, str):
            id = ObjectId(id)
        db = client[dbname]
        response = db.affiliates.find_one({ "_id": id })
        if response:
            response["id"] = str(response["_id"])
        return response

    def add_affiliate(self, data):
        db = client[dbname]
        data = data.dict()
        response = db.affiliates.insert_one(data)
        if response.inserted_id:
            result = self.find_affiliate(response.inserted_id)
            result["id"] = str(result["_id"])
        return result

    def delete_affiliate(self, id):
        id = ObjectId(id)
        db = client[dbname]
        exists = self.find_affiliate(id)
        if not exists:
            return {"message": "This affiliate does not exist"}
        db.affiliates.delete_one({"_id": id})
        result = self.find_affiliate(id)
        if not result:
            return {"message": "Success!"}
        return {"message": "Could not delete affiliate"}