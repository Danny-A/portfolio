var gulp = require('gulp');
var requireDir = require('require-dir');
var config = require('./gulp/config');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
