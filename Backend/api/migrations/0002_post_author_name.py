# Generated by Django 4.0.2 on 2022-03-20 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author_name',
            field=models.CharField(default='<django.db.models.query_utils.DeferredAttribute object at 0x7fa05233ec20>', max_length=100),
        ),
    ]
