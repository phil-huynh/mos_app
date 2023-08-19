import os
import pymongo
from bson.objectid import ObjectId

dbhost = os.environ['MONGOHOST']
dbname = os.environ['MONGODATABASE']
dbuser = os.environ['MONGOUSER']
dbpass = os.environ['MONGOPASSWORD']
mongo_string = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

client = pymongo.MongoClient(mongo_string)


# class SubscriberQueries:
#     def get_all_subscribers(self):
#         db = client[dbname]
#         result = list(db.subscribers.find())
#         for value in result:
#             value["id"] = str(value["_id"])
#         return {"subscribers": result}

#     def get_subscriber(self, id):
#         if isinstance(id, str):
#             id = ObjectId(id)
#         db = client[dbname]
#         res = db.subscribers.find_one({ "_id": id })
#         if res:
#             res["id"] = str(res["_id"])

#         return res

#     def add_subscriber(self, data):
#         db = client[dbname]
#         data = data.dict()
#         res = db.subscribers.insert_one(data)
#         if res.inserted_id:
#             result = self.get_subscriber(res.inserted_id)
#             result["id"] = str(result["_id"])
#         return result
