import duckdb
from api.constants import DATA_FILE


class DB:
    def __init__(self, fp: str | None = ":memory:") -> None:
        self.conn = duckdb.connect(fp)
        # Load data into database connection
        self.conn.execute(
            "CREATE TABLE singers AS SELECT * FROM read_csv('{}')".format(DATA_FILE)
        )

    def get_dict_array(self, table_name: str) -> list[dict]:
        rel = self.conn.sql("SELECT * FROM {}".format(table_name))
        cols = rel.columns
        return [{k: v for k, v in zip(cols, row)} for row in rel.fetchall()]
