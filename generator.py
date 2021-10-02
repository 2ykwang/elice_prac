#-*- coding: utf-8 -*- 

import os

base_dir = os.path.dirname(__file__)

content = ""

with open(os.path.join(base_dir, 'README_TP.md'), encoding='UTF8') as r:
    content = r.read()

with open(os.path.join(base_dir, 'README.md'), 'w', encoding='UTF8') as w:
    w.write(content.replace('</table>','test')) 