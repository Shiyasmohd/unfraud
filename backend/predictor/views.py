from rest_framework.generics import ListAPIView
from rest_framework.response import Response

import numpy as np
import pickle

class Predictor(ListAPIView):
    def post(self, request):
        model_knn = pickle.load(open('model_knn.pkl', 'rb'))
        scalar_minmax=pickle.load(open('scalar_minmax.pkl', 'rb'))
        dic = request.data
        int_features = [float(x) for x in dic.values()]
        final_features = [np.array(int_features)]
        final_features=scalar_minmax.transform(final_features)

        prediction = model_knn.predict(final_features)

        if prediction[0] == 0:
            return Response({'isFraud':True})
        
        return Response({'isFraud':False})