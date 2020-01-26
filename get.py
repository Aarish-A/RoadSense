import requests
import credentials
import base64

tenant = credentials.credentials['Hamilton']

string = "Hackathon.CITM.Hamilton:Wm,yb&G`KB\\2}d<s"
headers = {'Authorization': 'Basic '+ (base64.b64encode(bytes(string, 'ascii'))).decode('ascii')}
response = requests.request("GET", tenant["uaa"]+"/oauth/token?grant_type=client_credentials", headers=headers)
token = response.json()["access_token"]

query = {
    'bbox': tenant['bbox'],
    'size': str(100),
    'page': str(0),
    'q': 'assetType:MIC'
}

headers = {'Authorization': 'Bearer '+ token}
response = requests.request('GET', 'https://hamilton.cityiq.io/api/v2/media/ondemand/assets/{{audio_asset}}/media?mediaType=AUDIO&timestamp={{startts}}')
# response = requests.request("GET", tenant["metadata"]+"/locations/search", headers=headers, params=query)
print(response.status_code)


# data = requests.get(url='https://UAA_URL/oauth/token', params={'grant_type': client_credentials})
# print(data.status_code)