import duckdb
from src.api.constants import DATA_FILE


DATA_FILE_COLUMNS = """
columns = {
    'id': 'BIGINT',
    'name': 'VARCHAR',
    'maidenName': 'VARCHAR',
    'voiceType': 'VARCHAR',
    'yearsActiveStart': 'VARCHAR',
    'yearsActiveEnd': 'VARCHAR',
    'dateOfDeath': 'DATE',
    'url': 'VARCHAR'
}
"""


class DB:
    def __init__(self, fp: str | None = ":memory:") -> None:
        self.conn = duckdb.connect(fp)
        # Load data into database connection
        query = f"""
CREATE TABLE singers AS SELECT * FROM read_csv('{DATA_FILE}', {DATA_FILE_COLUMNS})
        """
        self.conn.execute(query=query)

    def get_dict_array(self, table_name: str) -> list[dict]:
        rel = self.conn.sql("SELECT * FROM {}".format(table_name))
        cols = rel.columns
        return [{k: v for k, v in zip(cols, row)} for row in rel.fetchall()]
