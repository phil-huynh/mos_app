from ..db_connect import *

class ArtQueries:
    def get_all_art(self):
        db = client[dbname]
        result = list(db.art.find())
        for value in result:
            value["id"] = str(value["_id"])
        return {"pieces": result}

    def find_piece(self, id):
        if isinstance(id, str):
            id = ObjectId(id)
        db = client[dbname]
        response = db.art.find_one({ "_id": id })
        if response:
            response["id"] = str(response["_id"])
        return response

    def add_piece(self, data):
        db = client[dbname]
        data = data.dict()
        response = db.art.insert_one(data)
        if response.inserted_id:
            result = self.find_piece(response.inserted_id)
            result["id"] = str(result["_id"])
        return result
