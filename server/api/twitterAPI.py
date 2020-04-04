import twitter
import json
import sys
# Import unquote to prevent url encoding errors in next_results
from urllib.parse import unquote

# Go to http://dev.twitter.com/apps/new to create an app and get values
# for these credentials, which you'll need to provide in place of these
# empty string values that are defined as placeholders.
# See https://dev.twitter.com/docs/auth/oauth for more information 
# on Twitter's OAuth implementation.

CONSUMER_KEY = '2fvZlHENLn1ahHgPFc5ZBhAo9'
CONSUMER_SECRET = 'XHSsWvld5mNzEtvi1gS9Gr9sZ2HFbaxHdm82GdQTFQgzDM5CjS'
OAUTH_TOKEN = '772287022987870208-0reUQE7ep9BWPwx7ylVaS6SI3pv1eHh'
OAUTH_TOKEN_SECRET = 'Zx7WfdttAId6Rzn6KEOF9xsipSzr2EZw6kBBFxOTt3GF5'

auth = twitter.oauth.OAuth(OAUTH_TOKEN, OAUTH_TOKEN_SECRET,
                           CONSUMER_KEY, CONSUMER_SECRET)

twitter_api = twitter.Twitter(auth=auth)

# Set this variable to a trending topic, 
# or anything else for that matter. The example query below
# was a trending topic when this content was being developed
# and is used throughout the remainder of this chapter.

q = sys.argv[1]

count = 100

# See https://dev.twitter.com/rest/reference/get/search/tweets

search_results = twitter_api.search.tweets(q=q, count=count)

statuses = search_results['statuses']
jsonData = json.dumps(statuses, indent=1)
print(jsonData)
sys.stdout.flush()
#for status in statuses:
 #   print(json.dumps(status, indent=1))
  #  sys.stdout.flush()
# Iterate through 5 more batches of results by following the cursor
#for _ in range(5):
#    print('Length of statuses', len(statuses))
#    try:
#        next_results = search_results['search_metadata']['next_results']
#    except KeyError as e: # No more results when next_results doesn't exist
#        break
        
    # Create a dictionary from next_results, which has the following form:
    # ?max_id=847960489447628799&q=%23RIPSelena&count=100&include_entities=1
#    kwargs = dict([ kv.split('=') for kv in unquote(next_results[1:]).split("&") ])
    
#    search_results = twitter_api.search.tweets(**kwargs)
#    statuses += search_results['statuses']

# Show one sample search result by slicing the list...




