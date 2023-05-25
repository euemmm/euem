from PIL import Image
import sys

im1 = Image.open(sys.argv[1])
im1.save(r'/euem/express/routers/AI/input.jpg')
