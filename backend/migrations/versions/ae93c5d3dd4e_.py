"""empty message

Revision ID: ae93c5d3dd4e
Revises: 766f02a39ab4
Create Date: 2021-05-26 00:51:23.301117

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae93c5d3dd4e'
down_revision = '766f02a39ab4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('students', 'age')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('students', sa.Column('age', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
