from pathlib import Path

DATADIR = Path(__file__).parent.parent.parent.joinpath("data")

DATA_FILE = DATADIR.joinpath("singers.csv")
