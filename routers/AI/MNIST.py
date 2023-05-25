import numpy
from PIL import Image, ImageOps
import json
import os
import sys

imagepwd = os.path.abspath(os.getcwd()) + '/routers/AI/input.jpg'
paramspwd = os.path.abspath(os.getcwd()) + '/routers/AI/'
outputpwd = os.path.abspath(os.getcwd()) + '/routers/AI/output.json'

a1 = numpy.asarray(ImageOps.grayscale(ImageOps.invert(Image.open(imagepwd))).resize((28,28))) / 255

X1 = numpy.load(paramspwd + 'params/W1.npy').dot(a1.reshape(1, 784).T) + numpy.load(paramspwd + 'params/b1.npy')
a2 = numpy.maximum(X1, 0)

X2 = numpy.load(paramspwd +'params/W2.npy').dot(a2) + numpy.load(paramspwd +'params/b2.npy')
a3 = numpy.maximum(X2, 0)

X3 = numpy.load(paramspwd +'params/W3.npy').dot(a3) + numpy.load(paramspwd +'params/b3.npy')
a4 = numpy.exp(X3) / sum(numpy.exp(X3))

prediction = json.loads(str(numpy.argmax(a4, 0)[0]))
a1 = json.loads(str(a1.T.tolist()))
a2 = json.loads(str(a2.T.tolist()[0]))
a3 = json.loads(str(a3.T.tolist()[0]))
a4 = json.loads(str(a4.T.tolist()[0]))

result = {"prediction" : prediction, 
          "layer1" : a1, 
          "layer2" : a2,
          "layer3" : a3,
          "layer4" : a4}

with open(outputpwd, 'w') as file:
    json.dump(result, file, indent = 4)

os.remove(imagepwd)

print('done')
sys.stdout.flush()
