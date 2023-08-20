from ..db_connect import *

class OfferQueries:
    def get_all_offers(self):
        db = client[dbname]
        result = list(db.offers.find())
        for value in result:
            value["id"] = str(value["_id"])
        return {"offers": result}

    def find_offer(self, id):
        if isinstance(id, str):
            id = ObjectId(id)
        db = client[dbname]
        response = db.offers.find_one({ "_id": id })
        if response:
            response["id"] = str(response["_id"])
        return response

    def add_offer(self, data):
        db = client[dbname]
        data = data.dict()
        response = db.offers.insert_one(data)
        if response.inserted_id:
            result = self.find_offer(response.inserted_id)
            result["id"] = str(result["_id"])
        return result



    def delete_offer(self, id):
        id = ObjectId(id)
        db = client[dbname]
        exists = self.find_offer(id)
        if not exists:
            return {"message": "This offer does not exist"}
        db.offers.delete_one({"_id": id})
        result = self.find_offer(id)
        if not result:
            return {"message": "Success!"}
        return {"message": "Could not delete offer"}