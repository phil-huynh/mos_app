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
        db = client[dbname]
        return list(db.subscribers.find())

    def get_subscriber(self, id):
        db = client[dbname]
        res = db.subscrbers.find_one({ "_id": id })
        print("res in get subscribers", res)
        if res:
            return res

    def create_subscriber(self, data):
        db = client[dbname]
        print("********* data", data)
        data = data.dict()
        print("********* data after dict", data)

        res = db.subscribers.insert_one(data)
        print("RES ------- ", res)
        print("inserted id", res.inserted_id)
        if res.inserted_id:
            result = self.get_subscriber(res.inserted_id)
        print("result", result)
        return result
