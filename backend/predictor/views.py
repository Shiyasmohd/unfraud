from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import serializers

from predictor.models import Test

import numpy as np
import pickle

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('__all__')

class Predictor(ListAPIView):
    serializer_class = TestSerializer
    def post(self, request):
        diseases = [
            "Cancer","Heart Failure", "Alzheimer", "Kidney Disease", 
            "Obstructive Pulmonary", "Depression", "Diabetes", "Stroke", 
            "Ischemic Heart Disease", "Osteoporosis", "Rheumatoid Arthritis",
        ]

        model_knn = pickle.load(open('model_knn.pkl', 'rb'))
        scalar_minmax=pickle.load(open('scalar_minmax.pkl', 'rb'))
        dic = request.data
        int_features = []
        for key in dic.keys():
            if key != 'disease':
                int_features.append(float(dic[key]))
            else:
                for dis in diseases:
                    if dis in dic[key]:
                        int_features.append(float(1))
                    else:
                        int_features.append(float(0))

        final_features = [np.array(int_features)]
        final_features=scalar_minmax.transform(final_features)

        prediction = model_knn.predict(final_features)

        if prediction[0] == 0:
            return Response({'isFraud':True})
        
        return Response({'isFraud':False})