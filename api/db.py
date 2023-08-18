import os
import bson
import pymongo

dbhost = os.environ['MONGOHOST']
dbname = os.environ['MONGODATABASE']
dbuser = os.environ['MONGOUSER']
dbpass = os.environ['MONGOPASSWORD']
mongo_string = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

client = pymongo.MongoClient(mongo_string)


class SubscriberQueries:
    def get_all_subscribers(self):
        print("******* IN THE FUNCTION ************>")
        db = client[dbname]
        result = list(db.subscribers.find())
        print("#################", result)
        for value in result:
            value["id"] = str(value["_id"])
        print("****************************>",result)
        return {"subscribers": result}

    def get_subscriber(self, id):
        print("******* IN THE FUNCTION ************>")
        print("THE ID IS", id)
        db = client[dbname]
        res = db.subscribers.find_one({ "_id": id })
        print("res in get subscriber", res)
        if res:
            res["id"] = res["_id"]
        return res

    def add_subscriber(self, data):
        db = client[dbname]
        data = data.dict()
        res = db.subscribers.insert_one(data)
        if res.inserted_id:
            result = self.get_subscriber(res.inserted_id)
            result["id"] = str(result["_id"])
        return result
