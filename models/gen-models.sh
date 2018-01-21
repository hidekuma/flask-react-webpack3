#!/bin/bash
flask-sqlacodegen 'mysql://[user]:[password]@[host]/[database]' --flask > model.py
