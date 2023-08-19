from ..db_connect import *

class BlogQueries:
    def get_all_blogs(self):
        db = client[dbname]
        result = list(db.blogs.find())
        for value in result:
            value["id"] = str(value["_id"])
        return {"blogs": result}

    def find_blog(self, id):
        if isinstance(id, str):
            id = ObjectId(id)
        db = client[dbname]
        response = db.blogs.find_one({ "_id": id })
        if response:
            response["id"] = str(response["_id"])
        return response

    def add_blog(self, data):
        db = client[dbname]
        data = data.dict()
        response = db.blogs.insert_one(data)
        if response.inserted_id:
            result = self.find_blog(response.inserted_id)
            result["id"] = str(result["_id"])
        return result
