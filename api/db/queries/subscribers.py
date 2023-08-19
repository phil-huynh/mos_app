from ..db_connect import *

class SubscriberQueries:
    def get_all_subscribers(self):
        db = client[dbname]
        result = list(db.subscribers.find())
        for value in result:
            value["id"] = str(value["_id"])
        return {"subscribers": result}

    def find_subscriber(self, id):
        if isinstance(id, str):
            id = ObjectId(id)
        db = client[dbname]
        result = db.subscribers.find_one({ "_id": id })
        if result:
            result["id"] = str(result["_id"])
        return result

    def add_subscriber(self, data):
        db = client[dbname]
        data = data.dict()
        response = db.subscribers.insert_one(data)
        if response.inserted_id:
            result = self.find_subscriber(response.inserted_id)
            result["id"] = str(result["_id"])
        return result
