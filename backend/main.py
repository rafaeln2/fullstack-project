import json

from fastapi import Depends



if __name__ == "__main__":
    from database import engine, get_db, create_tables
    from models import Product
    from crud import create_product
    from sqlalchemy.orm import Session
    from schemas import ProductCreate    
    from database import SessionLocal
    from routes import create_product as create_product_route

    def teste(db : Session = Depends(get_db)):
        print(db)
        create_tables()
        print("Tabelas criadas com sucesso!")
    teste()

    def insert_product():
        # db = SessionLocal()
        # try:
        #     produto = ProductCreate(
        #         name="Notebook",
        #         price=2500.00,
        #         quantity=5,
        #         origin_place="Brasil"
        #     )
        #     new_product = create_product(db, produto)
        #     print(new_product)
        # finally:
        #     db.close()
        create_product_route()
        
        

    insert_product()


    # produto: Product = Product(id = 1,name="Celular", price=100, quantity=1)
    # print(produto.name)
    
    # produto_json = produto.model_dump_json()
    # produto = Product.model_validate_json(produto_json)
    # print(produto)