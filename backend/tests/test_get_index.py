from fastapi.testclient import TestClient
import unittest
from src.api.main import app


client = TestClient(app)


class Test(unittest.TestCase):

    def test_read_main(self):
        # Get a response from the TestClient
        response = client.get("/")

        # Assert that the response is good
        self.assertEqual(response.status_code, 200)

        # Assert that the first item returned is the first item in the data
        expected = {
            "dateOfDeath": "1922-03-13",
            "id": 1,
            "maidenName": "Twitchell",
            "name": "Jane Elizabeth Kempton",
            "url": "https://en.wikipedia.org/wiki/Jenny_Twitchell_Kempton",
            "voiceType": "contralto",
            "yearsActiveEnd": "1921",
            "yearsActiveStart": "1850",
        }
        actual = response.json()[0]
        self.assertDictEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
