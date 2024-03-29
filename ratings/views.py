from rest_framework import generics, permissions
from django_filters.rest_framework import DjangoFilterBackend
from we_rate_music_drf.permissions import IsOwnerOrReadOnly
from .models import Rating
from .serializers import RatingSerializer, RatingDetailSerializer


class RatingList(generics.ListCreateAPIView):
    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Rating.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['playlist']

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RatingDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RatingDetailSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Rating.objects.all()
